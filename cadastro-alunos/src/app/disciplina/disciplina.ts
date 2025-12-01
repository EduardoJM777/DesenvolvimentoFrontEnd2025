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

  novaDisciplina = {id: null, codigo: 0, descricao: '', ementa: '',
    professor: {id: null, matricula: '', nome: '', cpf: ''}
  };
  listaProfessores: Professor[] = [];
  listaDisciplinas: Disciplina[] = [];
  

  constructor(private disciplinaService: DisciplinaService, private professorService: ProfessorService, private router: Router){
    this.disciplinaService.listar().subscribe({
      next: (dados) => this.listaDisciplinas = dados,
      error: (err) => console.error(err)
    });
    this.professorService.listar().subscribe({
      next: (dados) => this.listaProfessores = dados,
      error: (err) => console.error(err)
    });
  }

  adicionarDisciplina(){
    this.disciplinaService.salvar({ ...this.novaDisciplina }).subscribe({
      next: (resp) => {
        this.listaDisciplinas.push(resp);
        this.novaDisciplina = {id: null, codigo: 0, descricao: '', ementa: '',
          professor: {id: null, matricula: '', nome: '', cpf: ''}
        }
      }
    });
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
