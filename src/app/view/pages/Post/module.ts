import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {PostModule} from '../../post/module'
import {CommonBricksModule} from '../../common-bricks/module'

import {PostPage} from './component'
import {PostPageRoutingModule} from './routing.module'

@NgModule({
  imports: [
    PostPageRoutingModule, BrowserModule, PostModule, CommonBricksModule
  ],
  declarations: [PostPage]
})
export class PostPageModule {}
