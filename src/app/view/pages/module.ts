import {NgModule} from '@angular/core'

import {OrganismsModule} from '../organisms/module'

import {PostsPage} from './Posts/component'
import {AboutPage} from './About/component'

@NgModule({
  imports: [OrganismsModule],
  declarations: [PostsPage, AboutPage],
  exports: [OrganismsModule]
})
export class PagesModule {}
