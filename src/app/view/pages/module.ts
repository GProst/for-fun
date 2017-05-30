import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {PostModule} from '../post/module'
import {PostListModule} from '../post-list/module'

import {PostsPage} from './Posts/component'
import {AboutPage} from './About/component'

@NgModule({
  imports: [BrowserModule, PostModule, PostListModule],
  declarations: [PostsPage, AboutPage],
  exports: [PostModule]
})
export class PagesModule {}
