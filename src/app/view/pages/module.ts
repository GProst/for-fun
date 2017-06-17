import {NgModule} from '@angular/core'

import {AboutPageModule} from './About/module'
import {PostPageModule} from './Post/module'
import {PostsPageModule} from './Posts/module'

@NgModule({
  imports: [
    PostsPageModule, PostPageModule, AboutPageModule
  ]
})
export class PagesModule {}
