import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { EditGameComponent } from './edit-game/edit-game.component';


const appRoutes:Routes=[
  {path:"gameList",
    component:GameListComponent},
  {path:"home",
    component:HomeComponent},
  {path:"gameDetail",
    component:GameDetailComponent},
  {path:"editGame",
    component:EditGameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   
  

 }
