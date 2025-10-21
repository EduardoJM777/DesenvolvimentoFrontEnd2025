import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saldo-reajuste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saldo-reajuste.html',
  styleUrl: './saldo-reajuste.css'
})
export class SaldoReajuste {
  valor1: number | null = null;
  resultado: number | null = null;

  calcReajuste(){
    let v1 = Number(this.valor1) || 0;
    this.resultado = v1 * 1.01;
  }

}