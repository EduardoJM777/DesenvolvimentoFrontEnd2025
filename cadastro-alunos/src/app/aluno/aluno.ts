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

  novoAluno: Aluno = {ra: '', nome: '', dtNascimento: '', curso: ''};
  listaAlunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router){
    this.listaAlunos = this.alunoService.getAlunos();
  }

  adicionarAluno(){
    this.alunoService.adicionarAluno({ ...this.novoAluno});
    this.novoAluno = {ra: '', nome: '', dtNascimento: '', curso: ''};
  }

  cadDisciplina(){
    this.router.navigate(['/disciplina']);
  }

  cadProfessor(){
    this.router.navigate(['/professor']);
  }

}
