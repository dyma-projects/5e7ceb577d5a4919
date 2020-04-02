import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }

  public helloString : string;
  public lienImage : string;
  public incrementValeur : number;

  public incrementation () : void {
    this.incrementValeur++;
  }

  ngOnInit(): void {
    this.helloString = "Hello world!!!";
    this.lienImage = "https://dyma.fr/assets/images/angular/angular-header-logo.png";
    this.incrementValeur = 0;
  }
}
