import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularMaterialModule} from './angular-material/module'

import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, AngularMaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
