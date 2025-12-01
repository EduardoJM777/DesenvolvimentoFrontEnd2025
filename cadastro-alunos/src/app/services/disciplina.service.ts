import { Injectable } from "@angular/core";
import { Disciplina } from "../models/disciplina.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class DisciplinaService {

    private disciplinas: Disciplina[] = [];

    private baseUrl = "http://localhost:8080/disciplina";

    constructor(private http: HttpClient) {}

   
    listar(): Observable<Disciplina[]> {
        return this.http.get<Disciplina[]>(this.baseUrl);
    }

   
    salvar(disciplina: Disciplina): Observable<Disciplina> {
        const payload = {...disciplina};
        delete payload.id;
        return this.http.post<Disciplina>(this.baseUrl, payload);
    }

    adicionarDisciplina(disciplina: Disciplina){
        this.disciplinas.push(disciplina);
    }

    getDisciplinas(): Disciplina[]{
        return this.disciplinas;
    }

}