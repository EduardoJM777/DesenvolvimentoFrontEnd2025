import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Listanomes } from './app/listanomes/listanomes';
import { Listanumeros } from './app/listanumeros/listanumeros';
import { ListaCompras } from './app/lista-compras/lista-compras';
import { ContadorNomes } from './app/contador-nomes/contador-nomes';
import { ListaDoZero } from './app/lista-do-zero/lista-do-zero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Listanomes, Listanumeros, ListaCompras, ContadorNomes, ListaDoZero],
  template: `

   <!-- <app-listanomes></app-listanomes>
        <app-listanumeros></app-listanumeros> 
        <app-lista-compras></app-lista-compras> 
        <app-contador-nomes></app-contador-nomes>   --> 
        <app-lista-do-zero></app-lista-do-zero>
  `,
})

export class App {
  name = 'Angular';
}

bootstrapApplication(App);
