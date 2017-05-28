import {Component, Input} from '@angular/core'

import {PostCardData} from '../PostCard/component'

@Component({
  selector: 'gp-post-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostList {
  @Input() posts: Array<PostCardData>
}
