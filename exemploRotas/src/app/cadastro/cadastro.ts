import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  constructor(private router: Router){

  }

  voltar(){
    this.router.navigate(['/home']);
  }

}
