import {Component, Input, OnChanges, HostListener} from '@angular/core'
import {Router} from '@angular/router'

import {ImageContent} from '../../common-bricks/Image/component'

export interface PostCardData {
  thumbnail: ImageContent,
  title: string,
  description: string,
  slug: string
}

@Component({
  selector: 'gp-post-card',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostCard implements OnChanges {
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
