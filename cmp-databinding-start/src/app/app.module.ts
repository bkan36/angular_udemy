import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    OddComponent,
    GameControlComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
