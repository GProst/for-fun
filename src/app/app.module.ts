import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'

import {RoutingModule} from './routing/module'
import {ViewModule} from './view/module'
import {CacheModule} from './cache/module'

import {AppComponent} from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [ViewModule, RoutingModule, HttpModule, CacheModule]
})
export class AppModule {}
