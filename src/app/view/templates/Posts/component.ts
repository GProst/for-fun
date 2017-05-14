import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

@Component({
  selector: 'gp-posts-page',
  template: require('./component.html'),
  styles: [require('./component.scss')],
  animations: [slideFromToLeft]
})
export default class PostsTemplate {
  @HostBinding('@routeAnimation') routeAnimation = true
}
