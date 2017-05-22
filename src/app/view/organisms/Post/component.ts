import {Component, Input, OnChanges, OnInit, OnDestroy, ElementRef} from '@angular/core'

import {ImageContent} from '../../atoms/Image/component'

export interface PostData {
  title: string,
  frontImage: ImageContent,
  mainContent: PostMainContent
}

type PostMainContent = Array<PostImage | PostSubTitle | PostParagraph | PostGallery | PostVideo>
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
  type: 'video',
  payload: string // TODO
}

@Component({
  selector: 'gp-post',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PostOrganism implements OnChanges, OnInit, OnDestroy {
  private frontImageElem: HTMLImageElement

  @Input() postData: PostData

  title: string
  frontImage: ImageContent
  mainContent: PostMainContent

  frontImageContainerStyles: object
  articleStyles: object

  constructor(private elem: ElementRef) {
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

  // article lies on 1/4 of frontImage
  setArticlePosition = () => {
    const frontImageHeight = this.frontImageElem.clientHeight
    const marginTop = frontImageHeight * 0.25
    this.articleStyles = {
      marginTop: `-${marginTop}px`
    }
  }

  ngOnChanges() {
    this.title = this.postData.title
    this.frontImage = this.postData.frontImage
    this.mainContent = this.postData.mainContent

    this.frontImageElem = this.elem.nativeElement.querySelector('.front-image-container img')
    this.frontImageElem.onload = () => {
      this.setArticlePosition()
      window.addEventListener('resize', this.setArticlePosition)
    }
  }

  ngOnInit() {
    this.setFrontImagePosition()
    window.addEventListener('resize', this.setFrontImagePosition)
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setFrontImagePosition)
    window.removeEventListener('resize', this.setArticlePosition)
  }
}
