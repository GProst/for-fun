import {Component, Input, HostBinding} from '@angular/core'

import {PostCardData} from '../PostCard/component'

import {slideFromLeft} from './animations'

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
