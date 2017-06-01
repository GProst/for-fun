import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {PostModule} from '../post/module'
import {CommonBricksModule} from '../common-bricks/module'
import {PostListModule} from '../post-list/module'

import {PostsPage} from './Posts/component'
import {AboutPage} from './About/component'
import {PostPage} from './Post/component'

@NgModule({
  imports: [BrowserModule, PostModule, PostListModule, CommonBricksModule],
  declarations: [PostsPage, AboutPage, PostPage],
  exports: [PostModule]
})
export class PagesModule {}
