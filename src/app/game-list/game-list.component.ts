import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList = [
    {name:'Borderlands 3',
    description:'Borderlands 3 è un videogioco action RPG-sparatutto in prima persona sviluppato da Gearbox Software e prodotto da 2K Games. Si tratta del quarto capitolo della serie Borderlands, preceduto da Borderlands: The Pre-Sequel.'},
    {name:'splatoon 2',
    description:'Bgydfyufiebfrlands, preceduto da Borderlands: The Pre-Sequel.'},
    {name:'wwz 3',
    description:'Borderlands 3 è un videogioco action RPG-sparatutto in prima persona sviluppato da Gearbox Software e prodotto da 2K Games. Si tratta del quarto capitolo della serie Borderlands, preceduto da Borderlands: The Pre-Sequel.'}
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
