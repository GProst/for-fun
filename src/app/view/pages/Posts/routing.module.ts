import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsPage} from './component'
import {PostListContainer} from '../../post-list/PostListContainer/component'

const postsPageRoutes: Routes = [
  {
    path: 'posts',
    component: PostsPage,
    children: [
      {
        path: '',
        component: PostListContainer
      },
      {
        path: 'page/:pageNumber',
        component: PostListContainer
      }
    ]
  }
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
