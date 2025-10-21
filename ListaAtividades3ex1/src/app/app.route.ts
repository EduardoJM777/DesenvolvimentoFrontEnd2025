import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ContatoComponent } from './contato-component/contato-component';
import { SobreComponent } from './sobre-component/sobre-component';

export const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'contato-component', component: ContatoComponent},
  {path: 'sobre-component', component: SobreComponent},
  {path: '', redirectTo: 'home-component', pathMatch: 'full'}
];