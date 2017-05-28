import {NgModule} from '@angular/core'

import {CommonBricksModule} from '../common-bricks/module'
import {GallerySlider} from './GallerySlider/component'
import {GallerySliderContainer} from './GallerySliderContainer/component'

@NgModule({
  declarations: [GallerySlider, GallerySliderContainer],
  imports: [CommonBricksModule],
  exports: [GallerySliderContainer]
})
export class GallerySliderModule {}
