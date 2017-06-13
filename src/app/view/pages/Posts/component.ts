import {Component, HostBinding, OnDestroy} from '@angular/core'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {slideAway} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {PaginationService} from '../../services/pagination.service'
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideAway]
})
export class PostsPage implements OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true

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

  showContent = (pageNumber: number) => {
    this.pageNumberSubscription.unsubscribe()
    this.pageNumber = pageNumber
    this.postsOnceLoaded = true
  }

  ngOnDestroy() {
    this.pageNumberSubscription.unsubscribe()
  }
}
