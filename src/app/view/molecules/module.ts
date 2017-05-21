import {NgModule} from '@angular/core'

import {AtomsModule} from '../atoms/module'
import {FooterMolecule} from './Footer/component'
import {GallerySliderMolecule} from './GallerySlider/component'
import {GalleryMolecule} from './Gallery/component'

@NgModule({
  declarations: [FooterMolecule, GallerySliderMolecule, GalleryMolecule],
  imports: [AtomsModule],
  exports: [AtomsModule, FooterMolecule, GallerySliderMolecule, GalleryMolecule]
})
export class MoleculesModule {}
