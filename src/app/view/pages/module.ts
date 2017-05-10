import {NgModule} from '@angular/core'

import PostsPage from './Posts/component'
import AboutPage from './About/component'

import TemplatesModule from '../templates/module'

@NgModule({
  declarations: [PostsPage, AboutPage],
  imports: [TemplatesModule],
  exports: [TemplatesModule]
})
export default class PagesModule {}
