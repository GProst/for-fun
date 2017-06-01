import {Component, HostBinding} from '@angular/core'

import {slideFromToLeft} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

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

  constructor(private postsService: PostsService, private cacheService: CacheService) {
    this.getPosts(1) // TODO:get page number from route state
  }

  async getPosts(pageNumber: number) {
    this.posts = this.cacheService.getPagePosts(pageNumber) || await this.postsService.fetchPosts(pageNumber)
    this.fetchingPosts = false
  }
}
