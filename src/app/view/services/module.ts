import {NgModule} from '@angular/core'

import {GallerySliderService} from './gallery-slider.service'
import {BreakpointsService} from './breakpoints.service'

@NgModule({
  providers: [GallerySliderService, BreakpointsService]
})
export class DataServicesModule {}
