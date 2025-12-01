import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})

export class AlunoComponent {

  novoAluno: Aluno = {id: null, ra: '', nome: '', cpf: '', anoIngresso: 0, periodoAtual: 0, 
    disciplina: {id: null, codigo: 0, descricao: '', ementa: '', 
    professor: {id: null, matricula: '', nome: '', cpf: ''
  }}};
  listaAlunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router){
    this.alunoService.listar().subscribe({
      next: (dados) => this.listaAlunos = dados,
      error: (err) => console.error(err)
    });
  }

  cadastrarAluno(){
    this.alunoService.salvar({...this.novoAluno});
    this.novoAluno = {id: null, ra: '', nome: '', cpf: '', anoIngresso: 0, periodoAtual: 0, 
      disciplina: {id: null, codigo: 0, descricao: '', ementa: '', 
      professor: {id: null, matricula: '', nome: '', cpf: ''
    }}};
  }

  cadDisciplina(){
    this.router.navigate(['/disciplina']);
  }

  cadProfessor(){
    this.router.navigate(['/professor']);
  }
}
