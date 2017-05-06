import {NgModule}      from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdToolbarModule, MdButtonModule} from '@angular/material'

@NgModule({
  exports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule],
  imports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule]
})
export class AngularMaterialModule {}
