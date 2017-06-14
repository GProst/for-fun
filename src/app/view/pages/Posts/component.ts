import {Component, OnDestroy} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Subscription} from 'rxjs/Subscription'

import {CONSTANTS} from '../../../constants'

import {PostCardData} from '../../post-list/PostCard/component'

import {PaginationService} from '../../services/pagination.service'

import {slideFromTo} from './animations'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromTo]
})
export class PostsPage implements OnDestroy {
  private pageNumberSubscription: Subscription
  posts: Array<PostCardData> = []
  postsOnceLoaded: boolean = false
  pageNumber: number

  constructor(
    private paginationService: PaginationService, private titleService: Title
  ) {
    titleService.setTitle(CONSTANTS.fixedTitle)
    this.pageNumberSubscription = paginationService.currentPageUpdates$.subscribe(this.showContent) // TODO: try move
    // TODO: it to paginationComponent
  }

  prepRouteState(outlet: any) {
    console.log('inner outlet', outlet.activatedRouteData.animation)
    return outlet.activatedRouteData.animation || 'posts' // TODO: try remove || part
  }

  showContent = (pageNumber: number) => {
    this.pageNumberSubscription.unsubscribe()
    this.pageNumber = pageNumber
    this.postsOnceLoaded = true
  }

  ngOnDestroy() {
    this.pageNumberSubscription.unsubscribe()
  }
}
