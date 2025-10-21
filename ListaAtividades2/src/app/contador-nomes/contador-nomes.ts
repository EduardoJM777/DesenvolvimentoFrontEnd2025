import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador-nomes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador-nomes.html',
  styleUrl: './contador-nomes.css'
})
export class ContadorNomes {

  nome: string | null = null;
  listaNomes: string[] = [];

  adicionarNome(){
    if (this.nome !== null){
      let nm = String(this.nome);
      this.listaNomes.push(nm);
      this.nome = null;
    }
  }

  removerNome(index: number){
    this.listaNomes.splice(index, 1);
  }

}
