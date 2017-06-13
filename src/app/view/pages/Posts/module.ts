import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {CommonBricksModule} from '../../common-bricks/module'
import {PostListModule} from '../../post-list/module'

import {PostsPage} from './component'
import {PostsPageRoutingModule} from './routing.module'

@NgModule({
  imports: [
    PostsPageRoutingModule, BrowserModule, PostListModule, CommonBricksModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule {}
