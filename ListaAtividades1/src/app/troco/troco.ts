import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-troco',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './troco.html',
  styleUrl: './troco.css'
})
export class TrocoComponent {
  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  calcularTroco(){
    let v1 = Number(this.valor1) || 0;
    let v2 = Number(this.valor2) || 0;
    this.resultado = v1 - v2;
  }
}
