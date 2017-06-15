import {Component, HostBinding} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

import {pageAnimation} from '../Post/post-page.animations'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [pageAnimation]
})
export class AboutPage {
  @HostBinding('@pageAnimation') pageAnimation: boolean | string = true

  postData: PostData
  loading: boolean = false

  constructor(private postsService: PostsService, private cacheService: CacheService, private titleService: Title) {
    titleService.setTitle(`About | ${CONSTANTS.fixedTitle}`)
    this.getPostData()
  }

  async getPostData() {
    const longRequest = setTimeout(() => {
      this.loading = true
    }, 300)
    this.postData = this.cacheService.getPost('about') || await this.postsService.fetchPost('about')
    clearTimeout(longRequest)
    this.pageAnimation = 'post-loaded'
    this.loading = false
  }
}
