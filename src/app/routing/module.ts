import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {RoutingService} from './routing.service'

import {PostsPage} from '../view/pages/Posts/component'
import {AboutPage} from '../view/pages/About/component'
import {PostPage} from '../view/pages/Post/component'

const appRoutes: Routes = [
  {path: 'posts', component: PostsPage},
  {path: 'posts/page/:pageNumber', component: PostsPage},
  {path: 'about', component: AboutPage},
  {path: 'posts/:slug', component: PostPage},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'}
]

@NgModule({
  providers: [RoutingService],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
