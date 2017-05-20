import {Component, Input, OnChanges} from '@angular/core'

export interface ImageContent {
  src: string
  srcSet: string
  sizes?: string
  alt: string
  title?: string
  className?: string
}

@Component({
  selector: 'gp-img',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ImageAtom implements OnChanges {
  @Input() content: ImageContent

  src: string
  srcSet: string
  sizes: string
  alt: string
  title: string
  className: string

  ngOnChanges() {
    this.src = this.content.src
    this.srcSet = this.content.srcSet
    this.sizes = this.content.sizes
    this.alt = this.content.alt
    this.title = this.content.title
    this.className = this.content.className
  }
}
