import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listanumeros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listanumeros.html',
  styleUrl: './listanumeros.css'
})

export class Listanumeros {

  novoNumero: number | null = null; 
  soma: number = 0;
  media: number = 0;
  listaNumeros: number[] = [];

  adicionarNumero(){
    if(this.novoNumero !== null) {
      let num = Number(this.novoNumero);
      this.listaNumeros.push(num);
      this.novoNumero = null;
      this.executaCalculo();
    }
  }

  removerNumero(index: number){
    this.listaNumeros.splice(index, 1);
    this.executaCalculo();
  }

  executaCalculo(){
    this.soma = 0;
    for(let num of this.listaNumeros){
      this.soma += num;
    }
    this.media = this.soma / this.listaNumeros.length;
  }

}
