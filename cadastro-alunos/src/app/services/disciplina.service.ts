import { Injectable } from "@angular/core";
import { Disciplina } from "../models/disciplina.model";

@Injectable({
    providedIn: 'root',
})

export class DisciplinaService {

    private disciplinas: Disciplina[] = [];

    adicionarDisciplina(disciplina: Disciplina): void{
        this.disciplinas.push(disciplina);
    }

    getDisciplinas(): Disciplina[]{
        return this.disciplinas;
    }

}