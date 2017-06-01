import {Component, HostBinding} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'

import {slideFromToRight} from './animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToRight]
})
export class PostPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData
  loading: boolean = true

  constructor(private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute) {
    this.route.params
      .subscribe(async (params: Params) => {
        const {slug} = params
        this.postData = cacheService.getPost(slug) || await postsService.fetchPost(slug)
        this.loading = false
      })
  }
}
