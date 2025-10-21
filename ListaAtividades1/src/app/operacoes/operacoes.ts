import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operacoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operacoes.html',
  styleUrl: './operacoes.css'
})

export class Operacoes {
  valor1: number | null = null;
  valor2: number | null = null;
  valor3: number | null = null;
  resultado: string | null = null;
  
  calcularMedias(){
    const v1 = Number(this.valor1) || 0;
    const v2 = Number(this.valor2) || 0;
    const v3 = Number(this.valor3) || 0;

    let mediaAritmetica = (v1 + v2 + v3) / 3;

    let somaValoresPeso = (v1 * 3) + (v2 * 2) + (v3 * 5);
    let somaPesos = 3 + 5 + 2;
    let mediaPonderada = somaValoresPeso/somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias/2;

    this.resultado = "Média Aritmética: " + mediaAritmetica +
    + " Média Ponderada: " + mediaPonderada +
    + " Soma das Médias: " + somaMedias +
    + " Média das Médias: " + mediaMedias; 

  }

}
