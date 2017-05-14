import {Component, HostBinding} from '@angular/core'

import {slideFromToRight} from './animations'

@Component({
  selector: 'gp-about-page',
  template: require('./component.html'),
  styles: [require('./component.scss')],
  animations: [slideFromToRight]
})
export default class AboutTemplate {
  @HostBinding('@routeAnimation') routeAnimation = true
}
