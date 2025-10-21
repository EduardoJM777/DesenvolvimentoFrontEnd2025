import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qtd-consu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qtd-consu.html',
  styleUrl: './qtd-consu.css'
})
export class QtdConsu {
  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  calcular(){
    let v1 = Number(this.valor1) || 0;
    let v2 = Number(this.valor2) || 0;
    this.resultado = v1 * v2;
  }
}
