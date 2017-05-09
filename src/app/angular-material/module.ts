import {NgModule} from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdToolbarModule, MdButtonModule, MdTabsModule} from '@angular/material'

@NgModule({
  exports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule, MdTabsModule],
  imports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule, MdTabsModule]
})
export class AngularMaterialModule {}
