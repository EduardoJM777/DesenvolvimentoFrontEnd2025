import { Aluno } from "./aluno.model";
import { Disciplina } from "./disciplina.model";

export interface Lancamento {

    aluno: Aluno;
    disciplina: Disciplina;

    notas: {
        bimestre1: number;
        bimestre2: number;
    };

    faltas: {
        bimestre1: number;
        bimestre2: number;
    };

}

export interface Falta {

    dia: number;
    falta: boolean;

}