import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {CommonBricksModule} from '../common-bricks/module'
import {ThirdPartyModule} from '../third-party/module'
import {Footer} from './Footer/component'
import {Header} from './Header/component'

@NgModule({
  declarations: [Footer, Header],
  imports: [BrowserModule, ThirdPartyModule, CommonBricksModule],
  exports: [Footer, Header]
})
export class SharedComponentsModule {}
