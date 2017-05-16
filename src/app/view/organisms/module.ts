import {NgModule} from '@angular/core'

import {MoleculesModule} from '../molecules/module'

import {HeaderOrganism} from './Header/component'

@NgModule({
  declarations: [HeaderOrganism],
  imports: [MoleculesModule],
  exports: [MoleculesModule, HeaderOrganism]
})
export class OrganismsModule {}
