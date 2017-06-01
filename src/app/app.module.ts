import {NgModule} from '@angular/core'

import {RoutingModule} from './app.routing.module'
import {ViewModule} from './view/module'

import {AppComponent} from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [RoutingModule, ViewModule]
})
export class AppModule {}
