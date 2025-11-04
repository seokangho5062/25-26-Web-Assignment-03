import { useState, type FormEvent } from "react";
import type { Gender, Student } from "../types";
import { Actions, FormGrid, Input, Label, Select, Button } from "../ui";

interface Props {
  onAdd: (student: Student) => void;
}

const initial: Student = {
  name: "",
  studentId: "",
  department: "",
  gender: "남",
};

export default function StudentForm({ onAdd }: Props) {
  const [form, setForm] = useState<Student>(initial);

  const onChange =
    (key: keyof Student) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const studentId = form.studentId.trim();

    if (!name || !studentId) {
      alert("이름과 학번은 필수입니다.");
      return;
    }

    onAdd({
      name,
      studentId,
      department: form.department.trim(),
      gender: form.gender as Gender,
    });

    setForm(initial);
  };

  return (
    <FormGrid onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name">이름</Label>
        <Input
          id="name"
          value={form.name}
          onChange={onChange("name")}
          placeholder="홍길동"
        />
      </div>

      <div>
        <Label htmlFor="studentId">학번</Label>
        <Input
          id="studentId"
          value={form.studentId}
          onChange={onChange("studentId")}
          placeholder="20250001"
        />
      </div>

      <div className="full">
        <Label htmlFor="department">학과</Label>
        <Input
          id="department"
          value={form.department}
          onChange={onChange("department")}
          placeholder="컴퓨터공학과"
        />
      </div>

      <div>
        <Label htmlFor="gender">성별</Label>
        <Select id="gender" value={form.gender} onChange={onChange("gender")}>
          <option value="남">남</option>
          <option value="여">여</option>
          <option value="기타">기타</option>
        </Select>
      </div>

      <Actions className="full">
        <Button type="submit">추가</Button>
      </Actions>
    </FormGrid>
  );
}
