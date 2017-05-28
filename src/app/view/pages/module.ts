import {NgModule} from '@angular/core'

import {PostModule} from '../post/module'
// import {PostList} from '../post-list/module'

import {PostsPage} from './Posts/component'
import {AboutPage} from './About/component'

@NgModule({
  imports: [PostModule],
  declarations: [PostsPage, AboutPage],
  exports: [PostModule]
})
export class PagesModule {}
