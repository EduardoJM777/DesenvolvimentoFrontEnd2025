import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listanomes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listanomes.html',
  styleUrl: './listanomes.css'
})

export class Listanomes {

  //Nome que será digitado no input
  novoNome: string = '';

  //Lista de nomes
  listaNomes: string[] = [];

  //Função para adicionar nomes na lista
  adicionarNomes(){

    //Verificar se novoNome não está vazio
    if(this.novoNome.trim()){

      //Adiciona o nome na lista
      this.listaNomes.push(this.novoNome);
      this.novoNome = '';

    }

  }

  //Remover um nome da lista
  removerNome(index: number){
    this.listaNomes.splice(index, 1);
  }

}
