import { Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno';
import { DisciplinaComponent } from './disciplina/disciplina';
import { ProfessorComponent } from './professor/professor';


export const routes: Routes = [
    {path: '', component: AlunoComponent},
    {path: 'disciplina', component: DisciplinaComponent},
    {path: 'professor', component: ProfessorComponent}
];
