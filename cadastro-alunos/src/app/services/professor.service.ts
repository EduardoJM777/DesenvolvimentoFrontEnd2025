import { Injectable } from "@angular/core";
import { Professor } from "../models/professor.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ProfessorService {

    private professores: Professor[] = [];

    private baseUrl = "http://localhost:8080/professor";

    constructor(private http: HttpClient) {}

   
    listar(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.baseUrl);
    }

   
    salvar(professor: Professor): Observable<Professor> {
        const payload = {...professor};
        delete payload.id;
        return this.http.post<Professor>(this.baseUrl, payload);
    }

    adicionarProfessor(professor: Professor){
        professor.id = this.professores.length + 1;
        this.professores.push(professor);
    }

    getProfessores(): Professor[]{
        return this.professores;
    }


}