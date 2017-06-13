import {NgModule} from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdToolbarModule, MdButtonModule, MdTooltipModule} from '@angular/material'

import './index.scss'

@NgModule({
  exports:  [MdToolbarModule, MdButtonModule, MdTooltipModule],
  imports:  [BrowserAnimationsModule, MdToolbarModule, MdButtonModule, MdTooltipModule]
})
export class AngularMaterialModule {}
