import {Component, Input, OnChanges, HostListener, HostBinding} from '@angular/core'
import {Router} from '@angular/router'

import {ImageContent} from '../../common-bricks/Image/component'

import {slideFromLeft} from './animations' // TODO: move animations to PostList component via 'query' method

export interface PostCardData {
  thumbnail: ImageContent,
  title: string,
  description: string,
  slug: string
}

@Component({
  selector: 'gp-post-card',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  animations: [slideFromLeft]
})
export class PostCard implements OnChanges {
  @HostBinding('@enterAnimation') enterAnimation = true

  @Input() content: PostCardData

  thumbnail: ImageContent
  title: string
  description: string
  slug: string

  constructor(private router: Router) {}

  @HostListener('click') onPostCardClick() {
    this.router.navigate(['/posts', this.slug])
  }

  ngOnChanges() {
    this.thumbnail = this.content.thumbnail
    this.title = this.content.title
    this.description = this.content.description
    this.slug = this.content.slug
  }
}
