import { ExamStatus } from "../enums/exam-status.enum";
import { Student } from "./student.model";

export interface Exam {
    id: string;
    student: Student;
    meeting_point?: string;
    date?: string;
    status?: ExamStatus
}