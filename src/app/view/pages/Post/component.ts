import {Component, HostBinding, OnDestroy} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {Subscription} from 'rxjs/Subscription'

import {slideToRight} from './post-page-animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-post-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideToRight]
})
export class PostPage implements OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData
  loading: boolean = true

  private routeParamsSubscription: Subscription

  constructor(
    private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute
  ) {

    this.routeParamsSubscription = this.route.params
      .subscribe(async (params: Params) => {
        const {slug} = params
        this.postData = cacheService.getPost(slug) || await postsService.fetchPost(slug)
        this.loading = false
      })
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }
}
