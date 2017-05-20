import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {PostsPage} from './view/pages/Posts/component'
import {AboutPage} from './view/pages/About/component'

const appRoutes: Routes = [
  {path: 'posts', component: PostsPage},
  {path: 'about', component: AboutPage},
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
