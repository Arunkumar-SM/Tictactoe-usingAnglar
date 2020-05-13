import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { FirstPersonComponent } from './firstperson.component';
import {BoardComponent} from './board.component';
import { SecondPersonComponent } from './secondperson.component';

@NgModule({
  declarations: [
    AppComponent,FirstPersonComponent, BoardComponent, SecondPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


