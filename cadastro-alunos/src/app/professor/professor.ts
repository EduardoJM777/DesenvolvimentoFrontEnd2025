import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../models/professor.model';
import { Router } from '@angular/router';
import { Disciplina } from '../models/disciplina.model';
import { DisciplinaService } from '../services/disciplina.service';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, FormsModule],
  templateUrl: './professor.html',
  styleUrl: './professor.css'
})
export class ProfessorComponent {

  novoProfessor: Professor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  listaProfessores: Professor[] = [];

  novaDisciplina: Disciplina = {nome:'',
    professor:{matricula:'', nome: '', cpf:'', dtAdmissao:''}, curso:'' };

  constructor(private professorService: ProfessorService, private discipinaService: DisciplinaService, private router: Router){
  }

  adicionarProfessor(){
    this.professorService.adicionarProfessor({ ...this.novoProfessor});
    this.novoProfessor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  }

  listaDisciplinas(){
    this.discipinaService.adicionarDisciplina({...this.novaDisciplina});
    this.novaDisciplina = {nome: '', professor:{matricula: '', nome: '', cpf:'', dtAdmissao: ''}, curso: ''};
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadDisciplina(){
    this.router.navigate(['/disciplina']);
  }

}
