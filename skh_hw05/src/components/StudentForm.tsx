import React, { useState } from "react";
import type { Student } from "../types/student";

type Props = {
  onAdd: (student: Omit<Student, "id">) => void;
};

export default function StudentForm({ onAdd }: Props) {
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    major: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", studentId: "", major: "", gender: "" });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="studentId"
        placeholder="학번"
        value={form.studentId}
        onChange={handleChange}
      />
      <input
        name="major"
        placeholder="학과"
        value={form.major}
        onChange={handleChange}
      />
      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
      >
        <option value="">성별 선택</option>
        <option value="남">남</option>
        <option value="여">여</option>
      </select>
      <button type="submit">추가</button>
    </form>
  );
}
