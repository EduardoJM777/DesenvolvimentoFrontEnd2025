import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-component',
  imports: [],
  templateUrl: './contato-component.html',
  styleUrl: './contato-component.css'
})
export class ContatoComponent {

  constructor(private router: Router){}

  voltar(){
    this.router.navigate(['/home-component']);
  }

}
