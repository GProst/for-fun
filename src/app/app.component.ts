import {Component} from '@angular/core'

import {RoutingService} from './routing/routing.service'

@Component({
  selector: 'gp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routingService: RoutingService) {
    /*we need to init routingService in root component, so it could subscribe to events ASAP and get initial route url*/
  }
}
