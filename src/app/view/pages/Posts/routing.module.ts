import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsPage} from './component'

const postsPageRoutes: Routes = [
  {path: 'posts', component: PostsPage},
  {path: 'posts/page/:pageNumber', component: PostsPage}
]

@NgModule({
  imports: [
    RouterModule.forChild(postsPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsPageRoutingModule {}
