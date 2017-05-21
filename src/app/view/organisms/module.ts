import {NgModule} from '@angular/core'

import {MoleculesModule} from '../molecules/module'

import {HeaderOrganism} from './Header/component'
import {PostOrganism} from './Post/component'
import {GallerySliderContainerOrganism} from './GallerySliderContainer/component'

@NgModule({
  declarations: [HeaderOrganism, PostOrganism, GallerySliderContainerOrganism],
  imports: [MoleculesModule],
  exports: [MoleculesModule, HeaderOrganism, PostOrganism, GallerySliderContainerOrganism]
})
export class OrganismsModule {}
