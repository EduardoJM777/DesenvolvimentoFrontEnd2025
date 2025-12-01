import { Professor } from "./professor.model";

export interface Disciplina {
    id?: number | null;
    codigo: number;
    descricao: string;
    ementa: string;
    professor: Professor;
}