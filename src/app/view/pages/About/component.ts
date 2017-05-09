import {Component, HostBinding} from '@angular/core'

import {slideFromToRight} from './animations'

@Component({
  selector: 'gp-about-page',
  template: require('./component.html'),
  animations: [slideFromToRight]
})
export default class AboutPage {
  @HostBinding('@routeAnimation') routeAnimation = true
  @HostBinding('style.display') display = 'block'
  @HostBinding('style.position') position = 'absolute'
}
