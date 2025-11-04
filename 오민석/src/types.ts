// src/types.ts

export type Gender = "남" | "여";

export interface Student {
  id: string;
  name: string;
  major?: string;
  gender: Gender;
}
