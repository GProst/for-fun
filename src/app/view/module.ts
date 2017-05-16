import {NgModule} from '@angular/core'

import {TemplatesModule} from './templates/module'

@NgModule({
  imports: [TemplatesModule],
  exports: [TemplatesModule]
})
export class ViewModule {}
