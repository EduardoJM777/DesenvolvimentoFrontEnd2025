import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-component',
  imports: [],
  templateUrl: './sobre-component.html',
  styleUrl: './sobre-component.css'
})
export class SobreComponent {

  constructor(private router: Router){}

  voltar(){
    this.router.navigate(['/home-component']);
  }

}
