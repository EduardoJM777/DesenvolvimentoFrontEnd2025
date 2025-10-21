import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-retorna-maior',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './retorna-maior.html',
  styleUrl: './retorna-maior.css'
})

export class RetornaMaior {

  numero1: number | null = null;
  numero2: number | null = null;
  maior: number | null = null;
  igual: string | null = null;

  funcaoMaior(){

    let n1 = Number(this.numero1) || 0;
    let n2 = Number(this.numero2) || 0;

    if (n1 > n2){
      this.maior = n1;
    } else if (n2 > n1) {
      this.maior = n2;
    } else {
      this.igual = "Não há valor maior";
    }

  }

}
