import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsPage} from './component'
import {PostList} from '../../post-list/PostList/component'

const postsPageRoutes: Routes = [
  {
    path: 'posts',
    component: PostsPage,
    children: [
      {
        path: '',
        component: PostList
      },
      {
        path: 'page/:pageNumber',
        component: PostList
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
