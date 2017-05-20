import {NgModule} from '@angular/core'

import {MoleculesModule} from '../molecules/module'

import {HeaderOrganism} from './Header/component'
import {PostOrganism} from './Post/component'
import {GalleryOrganism} from './Gallery/component'

@NgModule({
  declarations: [HeaderOrganism, PostOrganism, GalleryOrganism],
  imports: [MoleculesModule],
  exports: [MoleculesModule, HeaderOrganism, PostOrganism, GalleryOrganism]
})
export class OrganismsModule {}
