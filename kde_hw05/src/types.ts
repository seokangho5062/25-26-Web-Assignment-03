/* 성별과 학생 정보 타입 정의 */

export type Gender = "남" | "여" | "기타";

export interface Student {
  name: string;
  studentId: string;
  department: string;
  gender: Gender;
}
