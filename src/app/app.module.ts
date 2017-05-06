import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MdToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
