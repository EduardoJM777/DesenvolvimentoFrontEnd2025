import { Aluno } from "./aluno.model";
import { Disciplina } from "./disciplina.model";
import { Situacao } from "./situacao.enum";


export interface Lancamento {

    aluno: Aluno;
    disciplina: Disciplina;

    notas: {
        nota1Bim: number;
        nota2Bim: number;
    };

    faltas: {
        falta1Bim: number;
        falta2Bim: number;
    };
    
    matriculado:boolean;

    
    situacao: Situacao;

}

export interface Falta {

    dia: number;
    falta: boolean;

}
