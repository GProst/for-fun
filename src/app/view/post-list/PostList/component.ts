import {Component} from '@angular/core'
import {Params, ActivatedRoute} from '@angular/router'

import {PostCardData} from '../PostCard/component'

import {PostsService} from '../../services/posts.service'
import {PaginationService} from '../../services/pagination.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-post-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostList {
  posts: Array<PostCardData>
  fetchingPosts: boolean = true

  constructor(
    private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute,
    private paginationService: PaginationService
  ) {
    this.route.params
      .subscribe(async (params: Params) => {
        const {pageNumber} = params
        this.getPosts(pageNumber || 1) // default is first page
      })
  }

  async getPosts(pageNumber: number) {
    this.posts = this.cacheService.getPagePosts(pageNumber) || await this.postsService.fetchPosts(pageNumber)
    this.paginationService.updateCurrentPageNumber(pageNumber)
    this.fetchingPosts = false
  }
}
