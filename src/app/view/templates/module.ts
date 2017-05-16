import {NgModule} from '@angular/core'

import {OrganismsModule} from '../organisms/module'

import {PostsTemplate} from './Posts/component'
import {AboutTemplate} from './About/component'

@NgModule({
  imports: [OrganismsModule],
  declarations: [PostsTemplate, AboutTemplate],
  exports: [OrganismsModule]
})
export class TemplatesModule {}
