import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsTemplate} from './view/templates/Posts/component'
import {AboutTemplate} from './view/templates/About/component'

const appRoutes: Routes = [
  {path: 'posts', component: PostsTemplate},
  {path: 'about', component: AboutTemplate},
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
export class RoutingModule {}
