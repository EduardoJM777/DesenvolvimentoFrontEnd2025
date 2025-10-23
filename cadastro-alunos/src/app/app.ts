import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from './aluno/aluno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlunoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
