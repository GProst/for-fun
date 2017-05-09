import {NgModule} from '@angular/core'

import PagesModule from './pages/module'

@NgModule({
  imports: [PagesModule],
  exports: [PagesModule]
})
export default class ViewModule {}
