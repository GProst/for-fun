import {Component, HostBinding} from '@angular/core'

import {fadeInOut} from './animations'

@Component({
  selector: 'gp-loader',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [fadeInOut]
})
export class Loader {
  @HostBinding('@loaderAnimation') loaderAnimation = true
}
