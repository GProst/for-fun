import {Component, HostBinding} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'

import {slideFromToRight} from './animations'

import {PostData} from '../../post/Post/component'

import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'gp-about-page',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromToRight]
})
export class PostPage {
  @HostBinding('@routeAnimation') routeAnimation = true

  postData: PostData
  loading: boolean = true // TODO: create PostLoader or Loader component

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.route.params
      .switchMap((params: Params) => postsService.fetchPost(params.slug))
      .subscribe((post: PostData) => {
        this.postData = post
        this.loading = false
      })
  }
}
