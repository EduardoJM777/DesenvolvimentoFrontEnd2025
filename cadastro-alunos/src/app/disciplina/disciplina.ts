import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../services/disciplina.service';
import { Disciplina } from '../models/disciplina.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-disciplina',
  imports: [CommonModule, FormsModule],
  templateUrl: './disciplina.html',
  styleUrl: './disciplina.css'
})
export class DisciplinaComponent {

  novaDisciplina: Disciplina = {nome: '', professor: {matricula: '', nome: '', cpf: '', dtAdmissao: ''}, curso: ''};
  listaDisciplinas: Disciplina[] = [];

  constructor(private disciplinaService: DisciplinaService, private router: Router){
    this.listaDisciplinas = this.disciplinaService.getDisciplinas();
  }

  adicionarDisciplina(){
    this.disciplinaService.adicionarDisciplina({ ...this.novaDisciplina});
    this.novaDisciplina = {nome: '', professor: {matricula: '', nome: '', cpf: '', dtAdmissao: ''}, curso: ''};
  }

  cadAluno(){
    this.router.navigate(['']);
  }

  cadProfessor(){
    this.router.navigate(['/professor']);
  }


}
