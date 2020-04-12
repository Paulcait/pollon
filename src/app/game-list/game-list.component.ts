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
    {name:'Splatoon 2',
    description:'Splatoon 2 è un videogioco del 2017 sviluppato da Nintendo EPD e pubblicato da Nintendo per Nintendo Switch. Sparatutto in terza persona, è il seguito di Splatoon, videogioco del 2015 per Wii U.'},
    {name:'WWZ',
    description:'World War Z è un videogioco sparatutto in terza persona sviluppato da Saber Interactive e pubblicato da Focus Home Interactive e Paramount Pictures. È stato distribuito il 16 aprile 2019 per Microsoft Windows, PlayStation 4 e Xbox One. Il videogioco è ispirato al film World War Z del 2013.'}
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
