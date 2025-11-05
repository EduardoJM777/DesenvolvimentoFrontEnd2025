import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../models/professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, FormsModule],
  templateUrl: './professor.html',
  styleUrl: './professor.css'
})
export class ProfessorComponent {

  novoProfessor: Professor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  listaProfessores: Professor[] = [];

  constructor(private professorService: ProfessorService, private router: Router){
    this.listaProfessores = this.professorService.getProfessores();
  }

  adicionarProfessor(){
    this.professorService.adicionarProfessor({ ...this.novoProfessor});
    this.novoProfessor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadDisciplina(){
    this.router.navigate(['/disciplina']);
  }

}
