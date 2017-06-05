import {Component, HostBinding} from '@angular/core'

import {slideToRight} from '../Post/post-page-animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideToRight]
})
export class AboutPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData
  loading: boolean = true

  constructor(private postsService: PostsService, private cacheService: CacheService) {
      this.getPostData()
  }

  async getPostData() {
    this.postData = this.cacheService.getPost('about') || await this.postsService.fetchPost('about')
    this.loading = false
  }
}
