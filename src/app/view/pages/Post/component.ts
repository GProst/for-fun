import {Component, HostBinding, OnDestroy} from '@angular/core'
import {ActivatedRoute, Params, Router, NavigationEnd} from '@angular/router'
import 'rxjs/add/operator/switchMap'
import {Subscription} from 'rxjs/Subscription'

import {slideAway} from './post-page-animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-post-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideAway]
})
export class PostPage implements OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = 'to-left'

  postData: PostData
  loading: boolean = true

  private routeParamsSubscription: Subscription
  private routerSubscription: Subscription

  constructor(
    private router: Router, private postsService: PostsService, private cacheService: CacheService,
    private route: ActivatedRoute
  ) {
    this.routerSubscription = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const {url} = event
        console.log('url', url)
        if (url === '/posts' || url.includes('pages')) {
          this.routeAnimation = 'to-right' /* FixMe: this doesn't work, create routerService and in app.component
           subscribe to router redurects, then save prev path in routerService, according to this info, set start
           animation on post-container component. If prev was /posts then slide from right, otherwise from left.
           PostPage * AboutPage always slide away to right*/
        }
      })

    this.routeParamsSubscription = this.route.params
      .subscribe(async (params: Params) => {
        const {slug} = params
        this.postData = cacheService.getPost(slug) || await postsService.fetchPost(slug)
        this.loading = false
      })
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
    this.routerSubscription.unsubscribe()
  }
}
