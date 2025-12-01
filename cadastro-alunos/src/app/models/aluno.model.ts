import { Disciplina } from "./disciplina.model";

export interface Aluno {
    id?: number | null;
    ra: string;
    nome: string;
    cpf: string;
    anoIngresso: number;
    periodoAtual: number;

    disciplina: Disciplina;
}