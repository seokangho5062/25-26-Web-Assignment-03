import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import type { Student } from "./types";
import { AppWrap, Container, Title, Box, GlobalStyle } from "./ui";

const STORAGE_KEY = "students";

export default function App() {
  // 초기 상태를 localStorage에서 '한 번만' 읽어옴
  const [students, setStudents] = useState<Student[]>(() => {
    try {
      if (typeof window === "undefined") return [];
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // students가 바뀔 때마다 저장
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch {
      // 용량 초과 등 예외 무시
    }
  }, [students]);

  const addStudent = (s: Student) => setStudents((prev) => [s, ...prev]);
  const deleteStudent = (studentId: string) =>
    setStudents((prev) => prev.filter((s) => s.studentId !== studentId));

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <Container>
          <Title>학생 정보 관리</Title>

          <Box>
            <StudentForm onAdd={addStudent} />
          </Box>

          <Box style={{ marginTop: 16 }}>
            <StudentList students={students} onDelete={deleteStudent} />
          </Box>
        </Container>
      </AppWrap>
    </>
  );
}
