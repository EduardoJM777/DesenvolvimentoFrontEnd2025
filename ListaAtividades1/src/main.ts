import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SomaComponent } from './app/soma/soma';
import { TrocoComponent } from './app/troco/troco';
import { QtdConsu } from './app/qtd-consu/qtd-consu';
import { SaldoReajuste } from './app/saldo-reajuste/saldo-reajuste';
import { Operacoes } from './app/operacoes/operacoes';
import { RetornaMaior } from './app/retorna-maior/retorna-maior';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomaComponent, TrocoComponent, 
            QtdConsu, SaldoReajuste, Operacoes,
            RetornaMaior],
  template: `
    
    <app-soma></app-soma>
    <app-troco></app-troco>
    <app-qtd-consu></app-qtd-consu>
    <app-saldo-reajuste></app-saldo-reajuste>
    <app-operacoes></app-operacoes>
    <app-retorna-maior></app-retorna-maior>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
