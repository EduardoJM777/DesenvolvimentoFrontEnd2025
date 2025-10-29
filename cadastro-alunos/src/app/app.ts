import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from './aluno/aluno';
import { ProfessorComponent } from './professor/professor';
import { DisciplinaComponent } from './disciplina/disciplina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
