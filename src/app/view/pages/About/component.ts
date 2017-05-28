import {Component, HostBinding} from '@angular/core'

import {slideFromToRight} from './animations'

import {PostData} from '../../post/Post/component'

import {postData} from './content'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToRight]
})
export class AboutPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData = postData
}
