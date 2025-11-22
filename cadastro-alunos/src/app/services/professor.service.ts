import { Injectable } from "@angular/core";
import { Professor } from "../models/professor.model";

@Injectable({
    providedIn: 'root',
})

export class ProfessorService {

    private professores: Professor[] = [];

    adicionarProfessor(professor: Professor){
        professor.id = this.professores.length + 1;
        this.professores.push(professor);
    }

    getProfessores(): Professor[]{
        return this.professores;
    }


}