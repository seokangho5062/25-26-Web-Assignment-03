import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import type { Student } from "./types/student";

const STORAGE_KEY = "students";

export default function App() {
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // LocalStorage 동기화
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  // 학생 추가
  const addStudent = (newStudent: Omit<Student, "id">) => {
    if (!newStudent.name.trim() || !newStudent.studentId.trim()) return;
    setStudents((prev) => [
      ...prev,
      { ...newStudent, id: Date.now() },
    ]);
  };

  // 삭제
  const deleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="app-container">
      <h1>학생 정보 관리</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}
