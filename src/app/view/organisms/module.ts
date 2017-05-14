import {NgModule} from '@angular/core'

import MoleculesModule from '../molecules/module'

import Header from './Header/component'

@NgModule({
  declarations: [Header],
  imports: [MoleculesModule],
  exports: [MoleculesModule, Header]
})
export default class OrganismsModule {}
