import type { Student } from "../types";

interface Props {
  students: Student[];
  onDelete: (id: string) => void;
}

export default function StudentList({ students, onDelete }: Props) {
  if (students.length === 0) {
    return <p className="empty">등록된 학생이 없습니다.</p>;
  }

  return (
    <div className="cards">
      {students.map((s) => (
        <article className="card item" key={s.id}>
          <div className="item-main">
            <p><strong>이름:</strong> {s.name}</p>
            <p><strong>학번:</strong> {s.id}</p>
            <p><strong>학과:</strong> {s.major || "미입력"}</p>
            <p><strong>성별:</strong> {s.gender}</p>
          </div>
          <button className="btn danger" onClick={() => onDelete(s.id)}>삭제</button>
        </article>
      ))}
    </div>
  );
}
