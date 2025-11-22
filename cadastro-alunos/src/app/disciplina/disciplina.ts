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

  novaDisciplina = {nome: '', 
    professor: {id: 0, matricula: '', nome: '', cpf: '', dtAdmissao: ''}, 
                    curso: ''};
  listaProfessores: Professor[] = [];
  listaDisciplinas: Disciplina[] = [];
  

  constructor(private disciplinaService: DisciplinaService, private professorService: ProfessorService, private router: Router){
    this.listaDisciplinas = this.disciplinaService.getDisciplinas();
    this.listaProfessores = this.professorService.getProfessores();
  }

  adicionarDisciplina(){

    this.disciplinaService.adicionarDisciplina({...this.novaDisciplina});

    this.listaDisciplinas = this.disciplinaService.getDisciplinas();

    this.novaDisciplina = {nome: '', 
      professor: {id: 0, matricula: '', nome: '', cpf: '', dtAdmissao: ''}, 
                           curso: ''};
  }

  getDisciplinasDoProfessor(prof: Professor): Disciplina[]{
    return this.listaDisciplinas.filter(d => d.professor.nome === prof.nome);
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadProfessor(){
    this.router.navigate(['/professor']);
  }

}
