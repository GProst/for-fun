import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToLeft]
})
export class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  posts: Array<PostCardData> = []
  fetchingPosts: boolean = true

  fetchPosts(pageNumber: number) {
    this.postsService.fetchPosts(pageNumber) // TODO:get page number from route state
      .then(posts => {
        this.posts = posts // TODO: if no posts yet -> show loader
        this.fetchingPosts = false
      })
  }

  constructor(private postsService: PostsService) {
    this.fetchPosts(1) // TODO: fetch posts only if they are not in cache
  }
}
