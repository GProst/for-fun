import {Component, OnDestroy, HostBinding} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {Subscription} from 'rxjs/Subscription'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

import {pageAnimation} from './post-page.animations'

@Component({
  selector: 'gp-post-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [pageAnimation]
})
export class PostPage implements OnDestroy {
  @HostBinding('@pageAnimation') pageAnimation: boolean | string = true

  postData: PostData
  loading: boolean = false

  private routeParamsSubscription: Subscription

  constructor(
    private postsService: PostsService, private cacheService: CacheService, private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.routeParamsSubscription = this.route.params
      .subscribe(async (params: Params) => {
        const longRequest = setTimeout(() => {
          this.loading = true
        }, 300)

        const {slug} = params
        this.postData = cacheService.getPost(slug) || await postsService.fetchPost(slug)

        this.titleService.setTitle(`${this.postData.title} | ${CONSTANTS.fixedTitle}`)
        clearTimeout(longRequest)
        this.pageAnimation = 'post-loaded'
        this.loading = false
      })
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }
}
