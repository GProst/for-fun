import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {RoutingService} from './routing.service'

const appRoutes: Routes = [
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
