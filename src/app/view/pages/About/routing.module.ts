import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AboutPage} from './component'

const aboutPageRoutes: Routes = [
  {
    path: 'about',
    component: AboutPage,
    data: {
      animation: 'post'
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(aboutPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutPageRoutingModule {}
