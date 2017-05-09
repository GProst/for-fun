import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AngularMaterialModule} from './angular-material/module'

import RoutingModule from './app.routing.module'
import ViewModule from './view/module'

import {AppComponent} from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [RoutingModule, BrowserModule, AngularMaterialModule, ViewModule]
})
export class AppModule {}
