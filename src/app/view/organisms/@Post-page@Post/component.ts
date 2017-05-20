import {Component, Input, OnChanges, OnInit, OnDestroy, ElementRef} from '@angular/core'

import {ImageContent} from '../../atoms/Image/component'

export interface PostData {
  title: string,
  frontImage: ImageContent,
  mainContent: PostMainContent
}

// type PostMainContent = Array<PostImage | PostSubTitle | PostParagraph | PostGallery | PostVideo>
type PostMainContent = Array<PostParagraph>
type PostImage = {
  type: 'img',
  payload: ImageContent
}
type PostSubTitle = {
  type: 'subtitle',
  payload: string
}
type PostParagraph = {
  type: 'paragraph',
  payload: string
}
type PostGallery = {
  type: 'gallery',
  payload: Array<ImageContent>
}
type PostVideo = {
  type: 'gallery',
  payload: string // TODO
}

@Component({
  selector: 'gp-post',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostOrganism implements OnChanges, OnInit, OnDestroy {
  @Input() postData: PostData

  title: string
  frontImage: ImageContent
  mainContent: PostMainContent

  frontImageContainerStyles: object

  constructor(public elem: ElementRef) {
    this.frontImageContainerStyles = {
      left: 0
    }
  }

  setFrontImagePosition = () => {
    const postContainerWidth = this.elem.nativeElement.clientWidth
    const winWidth = window.innerWidth
    const frontImageLeftPos = (winWidth - postContainerWidth) / 2
    this.frontImageContainerStyles = {
      left: `-${frontImageLeftPos}px`
    }
  }

  ngOnChanges() {
    this.title = this.postData.title
    this.frontImage = this.postData.frontImage
    this.mainContent = this.postData.mainContent
  }

  ngOnInit() {
    this.setFrontImagePosition()
    window.addEventListener('resize', this.setFrontImagePosition)
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setFrontImagePosition)
  }
}
