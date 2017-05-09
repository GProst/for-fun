import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

@Component({
  selector: 'gp-posts-page',
  template: require('./component.html'),
  animations: [slideFromToLeft]
})
export default class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true
  @HostBinding('style.display') display = 'block'
  @HostBinding('style.position') position = 'absolute'
}
