import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToLeft]
})
export class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true
}
