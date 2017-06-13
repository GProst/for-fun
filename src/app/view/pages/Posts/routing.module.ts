import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsPage} from './component'
import {PostList} from '../../post-list/PostList/component'

const postsPageRoutes: Routes = [
  {
    path: 'posts',
    component: PostsPage,
    data: {
      animation: 'posts'
    },
    children: [
      {
        path: '',
        component: PostList,
        data: {
          animation: 'posts'
        }
      },
      {
        path: 'page/:pageNumber',
        component: PostList,
        data: {
          animation: 'posts'
        }
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
