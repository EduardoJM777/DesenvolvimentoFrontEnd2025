import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cadastro } from './cadastro/cadastro';
import { Lista } from './lista/lista';

export const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'cadastro', component: Cadastro},
  {path: 'lista', component: Lista},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];