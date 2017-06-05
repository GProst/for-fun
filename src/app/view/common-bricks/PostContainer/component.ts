import {Component, HostBinding} from '@angular/core'

import {RoutingService} from '../../../routing/routing.service'

import {slideFrom} from './animations'

@Component({
  selector: 'gp-post-container',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFrom]
})
export class PostContainer {
  @HostBinding('@enterAnimation') enterAnimation = 'from-left'

  private prevRouteWasPostList(url: string) {
    return url && (url === '/posts' || url.includes('page'))
  }

  constructor(private routingService: RoutingService) {
    if (this.prevRouteWasPostList(routingService.prevRouteUrl)) {
      this.enterAnimation = 'from-right'
    }
  }
}
