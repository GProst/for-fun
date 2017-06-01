import {Component, HostBinding} from '@angular/core'

import {slideFromToRight} from './animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToRight]
})
export class AboutPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData
  loading: boolean = true // TODO: create PostLoader or Loader component

  constructor(private postsService: PostsService) {
      postsService.fetchPost('about') // TODO: only if not in cache
        .then(post => {
          this.postData = post
          this.loading = false
        })
  }
}
