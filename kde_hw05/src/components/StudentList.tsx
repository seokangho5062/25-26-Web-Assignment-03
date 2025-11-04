import type { Student } from "../types";
import {
  ListGrid,
  Card,
  CardRow,
  KV,
  CardActions,
  DangerButton,
  Empty,
} from "../ui";

interface Props {
  students: Student[];
  onDelete: (studentId: string) => void;
}

export default function StudentList({ students, onDelete }: Props) {
  if (!students.length) {
    return <Empty>등록된 학생이 없습니다.</Empty>;
  }

  return (
    <ListGrid>
      {students.map((s) => (
        <Card key={s.studentId}>
          <CardRow>
            <KV>
              <span className="k">이름</span>
              <strong>{s.name}</strong>
            </KV>
            <KV>
              <span className="k">성별</span>
              <span>{s.gender}</span>
            </KV>
          </CardRow>

          <CardRow>
            <KV>
              <span className="k">학번</span>
              <span>{s.studentId}</span>
            </KV>
            <KV>
              <span className="k">학과</span>
              <span>{s.department || "-"}</span>
            </KV>
          </CardRow>

          <CardActions>
            <DangerButton onClick={() => onDelete(s.studentId)}>
              삭제
            </DangerButton>
          </CardActions>
        </Card>
      ))}
    </ListGrid>
  );
}
