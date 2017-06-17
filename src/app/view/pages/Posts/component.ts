import {Component, HostBinding} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Title} from '@angular/platform-browser'

import {CONSTANTS} from '../../../constants'

import {slideAway} from './animations'

import {PostCardData} from '../../post-list/PostCard/component'

import {PostsService} from '../../services/posts.service'
import {CacheService} from '../../../cache/cache.service'

@Component({
  selector: 'gp-posts-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideAway]
})
export class PostsPage {
  @HostBinding('@routeAnimation') routeAnimation = true
}
