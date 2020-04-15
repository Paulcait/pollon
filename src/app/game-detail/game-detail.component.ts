import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game;




  constructor(private gameListService: GameListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      if(params.get('id') != null){
        this.game = this.gameListService.getGame(Number(params.get('id')));
      }
    });
  }

}
