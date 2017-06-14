import {Component, OnDestroy} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {Subscription} from 'rxjs/Subscription'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-post-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostPage implements OnDestroy {
  postData: PostData
  loading: boolean = true

  private routeParamsSubscription: Subscription

  constructor(
    private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute,
    private titleService: Title
  ) {

    this.routeParamsSubscription = this.route.params
      .subscribe(async (params: Params) => {
        const {slug} = params
        this.postData = cacheService.getPost(slug) || await postsService.fetchPost(slug)
        this.titleService.setTitle(`${this.postData.title} | ${CONSTANTS.fixedTitle}`)
        this.loading = false
      })
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }
}
