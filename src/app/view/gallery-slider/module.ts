import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {CommonBricksModule} from '../common-bricks/module'
import {GallerySlider} from './GallerySlider/component'
import {GallerySliderContainer} from './GallerySliderContainer/component'

@NgModule({
  declarations: [GallerySlider, GallerySliderContainer],
  imports: [BrowserModule, CommonBricksModule],
  exports: [GallerySliderContainer]
})
export class GallerySliderModule {}
