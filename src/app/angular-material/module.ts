import {NgModule}      from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdButtonModule} from '@angular/material';

@NgModule({
  imports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule],
  exports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule]
})
export class AngularMaterialModule {}
