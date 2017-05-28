import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {CommonBricksModule} from '../common-bricks/module'
import {AngularMaterialModule} from '../third-party/angular-material/module'
import {PostList} from './PostList/component'
import {PostCard} from './PostCard/component'

@NgModule({
  declarations: [PostList, PostCard],
  imports: [BrowserModule, AngularMaterialModule, CommonBricksModule],
  exports: [PostList]
})
export class PostListModule {}
