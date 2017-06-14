import {Component} from '@angular/core'

import {RoutingService} from './routing/routing.service'

import {slideAway} from './app.animations'

@Component({
  selector: 'gp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideAway]
})
export class AppComponent {
  constructor(private routingService: RoutingService) {
    /*we need to init routingService in root component, so it could subscribe to events ASAP and get initial route url*/
  }

  prepRouteState(outlet: any) {
    console.log('outlet', outlet.activatedRouteData.animation)
    return outlet.activatedRouteData.animation || 'posts' // TODO: try remove || part
  }
}
