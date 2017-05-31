import {NgModule} from '@angular/core'

import {PagesModule} from './pages/module'
import {GallerySliderModule} from './gallery-slider/module'
import {DataServicesModule} from './services/module'
import {SharedComponentsModule} from './shared/module'

@NgModule({
  imports: [PagesModule, DataServicesModule, GallerySliderModule, SharedComponentsModule],
  exports: [PagesModule, DataServicesModule, GallerySliderModule, SharedComponentsModule]
})
export class ViewModule {}
