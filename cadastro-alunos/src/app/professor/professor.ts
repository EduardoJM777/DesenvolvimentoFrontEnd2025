import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../models/professor.model';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, FormsModule],
  templateUrl: './professor.html',
  styleUrl: './professor.css'
})
export class ProfessorComponent {

  novoProfessor: Professor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  listaProfessores: Professor[] = [];

  constructor(private professorService: ProfessorService){
    this.listaProfessores = this.professorService.getProfessores();
  }

  adicionarProfessor(){
    this.professorService.adicionarProfessor({ ...this.novoProfessor});
    this.novoProfessor = {matricula: '', nome: '', cpf: '', dtAdmissao: ''};
  }

}
