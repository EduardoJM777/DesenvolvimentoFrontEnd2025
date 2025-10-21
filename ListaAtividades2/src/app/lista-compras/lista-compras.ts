import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css'
})

export class ListaCompras {

  produto: string | null = null;
  valor: number | null = null;
  nomeProduto: string = '';
  preco: number = 0;
  soma: number = 0;
  listaProdutos: string[] = [];
  listaValores: number[] = [];

  adicionarProduto(){
    if(this.produto !== null) {
      let pdt = String(this.produto);
      this.listaProdutos.push(pdt);
      this.produto = null;
    }
  }

  adicionarValor(){
    if(this.valor !== null) {
      let val = Number(this.valor);
      this.listaValores.push(val);
      this.valor = null;
      this.executaCalculo();
    }
  }

  removerProduto(index: number){
    this.listaProdutos.splice(index, 1);
  }

  removerValor(index: number){
    this.listaValores.splice(index, 1);
    this.executaCalculo();
  }

  executaCalculo(){
    this.soma = 0;
    for(let val of this.listaValores){
      this.soma += val;
    }
  }

}
