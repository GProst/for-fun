import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {PostModule} from '../../post/module'
import {CommonBricksModule} from '../../common-bricks/module'

import {AboutPage} from './component'
import {AboutPageRoutingModule} from './routing.module'

@NgModule({
  imports: [
    AboutPageRoutingModule, BrowserModule, PostModule, CommonBricksModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
