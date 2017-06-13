import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostPage} from './component'

const postPageRoutes: Routes = [
  {
    path: 'posts/:slug',
    component: PostPage,
    data: {
      animation: 'post'
    }
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(postPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostPageRoutingModule {}
