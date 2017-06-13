import {NgModule} from '@angular/core'

import {GallerySliderService} from './gallery-slider.service'
import {PaginationService} from './pagination.service'
import {BreakpointsService} from './breakpoints.service'
import {PostsService} from './posts.service'

@NgModule({
  providers: [PaginationService, GallerySliderService, BreakpointsService, PostsService]
})
export class ViewServicesModule {}
