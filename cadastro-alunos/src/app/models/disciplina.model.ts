import { Professor } from "./professor.model";

export interface Disciplina {
    nome: string;
    professor: Professor;
    professorId: number;
    curso: string;
}