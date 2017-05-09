import {NgModule} from '@angular/core'

import PostsTemplate from './Posts/component'
import AboutTemplate from './About/component'

@NgModule({
  declarations: [PostsTemplate, AboutTemplate],
  exports: [PostsTemplate, AboutTemplate]
})
export default class TemplatesModule {}
