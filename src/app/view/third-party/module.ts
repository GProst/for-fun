import {NgModule} from '@angular/core'

import {AngularMaterialModule} from './angular-material/module'
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  imports: [AngularMaterialModule, FlexLayoutModule],
  exports: [AngularMaterialModule, FlexLayoutModule]
})
export class ThirdPartyModule {}
