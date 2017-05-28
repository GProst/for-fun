import {Component, Input, OnChanges} from '@angular/core'

import {ImageContent} from '../../common-bricks/Image/component'

export interface PostCardData {
  thumbnail: ImageContent,
  title: string,
  description: string
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
  dateOfCreation: string

  ngOnChanges() {
    this.thumbnail = this.content.thumbnail
    this.title = this.content.title
    this.description = this.content.description
  }
}
