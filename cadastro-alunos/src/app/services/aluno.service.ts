import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl = "http://localhost:8080/alunos";

  constructor(private http: HttpClient) {}

  // BUSCAR TODOS OS ALUNOS DO BACKEND
  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }

  salvar(aluno: Aluno): Observable<Aluno> {
        const payload = {...aluno};
        delete payload.id;
        return this.http.post<Aluno>(this.baseUrl, payload);
    }

}
