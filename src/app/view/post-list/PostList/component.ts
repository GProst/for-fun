import {Component, Input, HostBinding} from '@angular/core'

import {slideFromLeft} from './animations'

import {PostCardData} from '../PostCard/component'

@Component({
  selector: 'gp-post-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromLeft]
})
export class PostList {
  @HostBinding('@enterAnimation') enterAnimation = true

  @Input() posts: Array<PostCardData>
}
