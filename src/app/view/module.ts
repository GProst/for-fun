import {NgModule} from '@angular/core'

import {PagesModule} from './pages/module'
import {GallerySliderModule} from './gallery-slider/module'
import {ViewServicesModule} from './services/module'
import {SharedComponentsModule} from './shared/module'

@NgModule({
  imports: [PagesModule, ViewServicesModule, GallerySliderModule, SharedComponentsModule],
  exports: [PagesModule, ViewServicesModule, GallerySliderModule, SharedComponentsModule]
})
export class ViewModule {}
