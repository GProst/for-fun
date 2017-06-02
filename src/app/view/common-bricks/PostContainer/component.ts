import {Component, HostBinding} from '@angular/core'

import {slideFromRight} from './animations'

@Component({
  selector: 'gp-post-container',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromRight]
})
export class PostContainer {
  @HostBinding('@enterAnimation') enterAnimation = true
}
