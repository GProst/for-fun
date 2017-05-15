import {NgModule} from '@angular/core'

import AtomsModule from '../atoms/module'
import Footer from './Footer/component'

@NgModule({
  declarations: [Footer],
  imports: [AtomsModule],
  exports: [AtomsModule, Footer]
})
export default class MoleculesModule {}
