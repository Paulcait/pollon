import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  gameList=[
    {id:1,
    name:'Borderlands 3',
    description:'Borderlands 3 è un videogioco action RPG-sparatutto in prima persona sviluppato da Gearbox Software e prodotto da 2K Games. Si tratta del quarto capitolo della serie Borderlands, preceduto da Borderlands: The Pre-Sequel.',
    piattaforma:'PlayStation 4, Xbox One, Microsoft Windows, Google Stadia',
    prezzo:'59,99€'},
    {id:2,
    name:'Splatoon 2',
    description:'Splatoon 2 è un videogioco del 2017 sviluppato da Nintendo EPD e pubblicato da Nintendo per Nintendo Switch. Sparatutto in terza persona, è il seguito di Splatoon, videogioco del 2015 per Wii U.',
    piattaforma:'Nintendo Switch',
    prezzo:'59,99 €'},
    {id:3,
    name:'WWZ',
    description:'World War Z è un videogioco sparatutto in terza persona sviluppato da Saber Interactive e pubblicato da Focus Home Interactive e Paramount Pictures. È stato distribuito il 16 aprile 2019 per Microsoft Windows, PlayStation 4 e Xbox One. Il videogioco è ispirato al film World War Z del 2013.',
    piattaforma:'Microsoft Windows, PlayStation 4, Xbox One',
    prezzo:'34,99 €'}
  ]

  constructor() { }
  getGame(id:number){

    for (let i = 0; i === id; i++) {
        return this.gameList[id];
      
    }

  }
}
