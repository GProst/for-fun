import {NgModule} from '@angular/core'

import {GallerySliderService} from './gallery-slider.service'
import {BreakpointsService} from './breakpoints.service'
import {PostsService} from './posts.service'

@NgModule({
  providers: [GallerySliderService, BreakpointsService, PostsService]
})
export class DataServicesModule {}
