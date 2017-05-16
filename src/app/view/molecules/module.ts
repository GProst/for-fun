import {NgModule} from '@angular/core'

import {AtomsModule} from '../atoms/module'
import {FooterMolecule} from './Footer/component'

@NgModule({
  declarations: [FooterMolecule],
  imports: [AtomsModule],
  exports: [AtomsModule, FooterMolecule]
})
export class MoleculesModule {}
