import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {CommonBricksModule} from '../common-bricks/module'
import {Gallery} from './Gallery/component'
import {Post} from './Post/component'

@NgModule({
  declarations: [Gallery, Post],
  imports: [BrowserModule, CommonBricksModule],
  exports: [Gallery, Post]
})
export class PostModule {}
