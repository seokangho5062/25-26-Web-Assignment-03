import { useState } from "react";
import type { Student, Gender } from "../types";

interface Props {
  onAdd: (student: Student) => void;
}

export default function StudentForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState<Gender>("남");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !id.trim()) return;

    onAdd({ name: name.trim(), id: id.trim(), major: major.trim() || undefined, gender });
    setName("");
    setId("");
    setMajor("");
    setGender("남");
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="grid">
        <label className="field">
          <span className="label">이름</span>
          <input
            className="input"
            type="text"
            placeholder="ex) 홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="label">학번</span>
          <input
            className="input"
            type="text"
            placeholder="ex) 2025xxxx"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="label">학과</span>
          <input
            className="input"
            type="text"
            placeholder="ex) 소프트웨어공학과"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="label">성별</span>
          <select
            className="input select"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value="남">남</option>
            <option value="여">여</option>
          </select>
        </label>
      </div>

      <div className="actions">
        <button className="btn" type="submit">추가</button>
      </div>
    </form>
  );
}


