import {NgModule} from '@angular/core'

import {PagesModule} from './pages/module'
import {ViewServicesModule} from './services/module'

@NgModule({
  imports: [PagesModule, ViewServicesModule],
  exports: [PagesModule, ViewServicesModule]
})
export class ViewModule {}
