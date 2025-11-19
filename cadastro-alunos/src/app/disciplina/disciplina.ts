import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../services/disciplina.service';
import { Disciplina } from '../models/disciplina.model';
import { Router } from '@angular/router';
import { Professor } from '../models/professor.model';
import { ProfessorService } from '../services/professor.service';


@Component({
  selector: 'app-disciplina',
  imports: [CommonModule, FormsModule],
  templateUrl: './disciplina.html',
  styleUrl: './disciplina.css'
})
export class DisciplinaComponent {

  novaDisciplina: Disciplina = {nome: '', professor: {id: 0, matricula: '', nome: '', cpf: '', dtAdmissao: ''}, professorId: 0, curso: ''};
  listaProfessor: Professor[] = [];
  listaDisciplinas: Disciplina[] = [];
  

  constructor(private disciplinaService: DisciplinaService, private professorService: ProfessorService, private router: Router){
    this.listaDisciplinas = this.disciplinaService.getDisciplinas();
    this.listaProfessor = this.professorService.getProfessores();
  }

  adicionarDisciplina(){
    this.disciplinaService.adicionarDisciplina({ ...this.novaDisciplina});
    this.novaDisciplina = {nome: '', professor: {id: 0, matricula: '', nome: '', cpf: '', dtAdmissao: ''}, professorId: 0, curso: ''};
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadProfessor(){
    this.router.navigate(['/professor']);
  }

  ngOnInit(): void{
    this.listaProfessor = this.professorService.getProfessores();
  }


}
