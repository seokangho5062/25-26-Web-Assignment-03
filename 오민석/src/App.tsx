import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm.tsx";
import StudentList from "./components/StudentList.tsx";
import type { Student } from "./types";
import "./App.css";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  // 초기 로드
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);

  // 저장 동기화
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student: Student) => {
    if (!student.name?.trim() || !student.id?.trim()) {
      alert("이름과 학번을 모두 입력하세요.");
      return;
    }
    setStudents(prev => [...prev, student]);
  };

  const deleteStudent = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="page">
      <div className="shell">
        <header className="header">
          <h1>학생 정보 관리</h1>
          <p className="sub">
            이름·학번 필수 / 학과·성별 선택 — 추가 후 자동 저장됩니다.
          </p>
        </header>

        <StudentForm onAdd={addStudent} />
        <StudentList students={students} onDelete={deleteStudent} />
      </div>
    </div>
  );
}

export default App;
