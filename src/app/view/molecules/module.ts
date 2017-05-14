import {NgModule} from '@angular/core'

import AtomsModule from '../atoms/module'

@NgModule({
  imports: [AtomsModule],
  exports: [AtomsModule]
})
export default class MoleculesModule {}
