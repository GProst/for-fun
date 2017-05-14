import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import PostsPageTemplate from './view/templates/Posts/component'
import AboutPageTemplate from './view/templates/About/component'

const appRoutes: Routes = [
  {path: 'posts', component: PostsPageTemplate},
  {path: 'about', component: AboutPageTemplate},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export default class RoutingModule {}
