import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../models/professor.model';
import { Router } from '@angular/router';
import { DisciplinaService } from '../services/disciplina.service';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, FormsModule],
  templateUrl: './professor.html',
  styleUrl: './professor.css'
})

export class ProfessorComponent {

  novoProfessor: Professor = {id: null, matricula: '', nome: '', cpf: ''};
  listaProfessores: Professor[] = [];

  constructor(private professorService: ProfessorService, private router: Router){
    this.professorService.listar().subscribe({
      next: (dados) => this.listaProfessores = dados,
      error: (err) => console.error(err)
    });
  }

  adicionarProfessor(){
    this.professorService.salvar({ ...this.novoProfessor }).subscribe({
      next: (resp) => {
        this.listaProfessores.push(resp);
        this.novoProfessor = { id: null, matricula: '', nome: '', cpf: '' };
      }
    });
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadDisciplina(){
    this.router.navigate(['/disciplina']);
  }

}
