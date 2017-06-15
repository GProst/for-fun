import {Component, HostBinding} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {slideAway} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideAway]
})
export class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  posts: Array<PostCardData> = []
  fetchingPosts: boolean = true

  constructor(
    private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute,
    private titleService: Title
  ) {
    titleService.setTitle(CONSTANTS.fixedTitle)
    this.route.params
      .subscribe(async (params: Params) => {
        const {pageNumber} = params
        this.getPosts(pageNumber || 1) // default is first page
      })
  }

  async getPosts(pageNumber: number) {
    this.posts = this.cacheService.getPagePosts(pageNumber) || await this.postsService.fetchPosts(pageNumber)
    this.fetchingPosts = false
  }
}
