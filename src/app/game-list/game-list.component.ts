import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

 gameList = []

  constructor(private gameListService:GameListService) {
    this.gameList = gameListService.gameList;
  }

  ngOnInit(): void {
  }

}
