import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaService } from '../services/disciplina.service';
import { Disciplina } from '../models/disciplina.model';
import { Professor } from '../models/professor.model';


@Component({
  selector: 'app-disciplina',
  imports: [],
  templateUrl: './disciplina.html',
  styleUrl: './disciplina.css'
})
export class DisciplinaComponent {

  novaDisciplina: Disciplina = {nome: '', professor: {matricula: '', nome: '', cpf: '', dtAdmissao: ''}, curso: ''};
  listaDisciplinas: Disciplina[] = [];

  constructor(private disciplinaService: DisciplinaService){
    this.listaDisciplinas = this.disciplinaService.getDisciplinas();
  }

  adicionarDisciplina(){
    this.disciplinaService.adicionarDisciplina({ ...this.novaDisciplina});
    this.novaDisciplina = {nome: '', professor: {matricula: '', nome: '', cpf: '', dtAdmissao: ''}, curso: ''};
  }


}
