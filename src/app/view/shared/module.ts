import {NgModule} from '@angular/core'

import {CommonBricksModule} from '../common-bricks/module'
import {Footer} from './Footer/component'
import {Header} from './Header/component'

@NgModule({
  declarations: [Footer, Header],
  imports: [CommonBricksModule],
  exports: [Footer, Header]
})
export class SharedComponentsModule {}
