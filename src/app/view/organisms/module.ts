import {NgModule} from '@angular/core'

import {MoleculesModule} from '../molecules/module'

import {HeaderOrganism} from './Header/component'
import {PostOrganism} from './@Post-page@Post/component'

@NgModule({
  declarations: [HeaderOrganism, PostOrganism],
  imports: [MoleculesModule],
  exports: [MoleculesModule, HeaderOrganism, PostOrganism]
})
export class OrganismsModule {}
