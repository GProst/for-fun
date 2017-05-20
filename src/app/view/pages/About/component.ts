import {Component, HostBinding} from '@angular/core'

import {slideFromToRight} from './animations'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToRight]
})
export class AboutPage {
  @HostBinding('@routeAnimation') routeAnimation = true
}
