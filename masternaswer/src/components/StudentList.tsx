import React from "react";
import type { Student } from "../types/student";

type Props = {
  students: Student[];
  onDelete: (id: number) => void;
};

export default function StudentList({ students, onDelete }: Props) {
  if (students.length === 0)
    return <p className="empty-message">등록된 학생이 없습니다.</p>;

  return (
    <ul className="student-list">
      {students.map((s) => (
        <li key={s.id} className="student-card">
          <div className="student-info">
            <p><strong>이름:</strong> {s.name}</p>
            <p><strong>학번:</strong> {s.studentId}</p>
            <p><strong>학과:</strong> {s.major || "미입력"}</p>
            <p><strong>성별:</strong> {s.gender || "미입력"}</p>
          </div>
          <button onClick={() => onDelete(s.id)} className="delete-btn">
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
