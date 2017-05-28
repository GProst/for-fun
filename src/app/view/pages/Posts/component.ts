import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {posts} from './fake-posts' // FixMe: fetch from backend

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToLeft]
})
export class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  posts: Array<PostCardData> = posts
}
