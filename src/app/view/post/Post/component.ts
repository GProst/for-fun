import {Component, Input, OnChanges, OnInit, OnDestroy, ElementRef} from '@angular/core'

import {ImageContent} from '../../common-bricks/Image/component'
import {GalleryImage} from '../Gallery/component'

interface FrontImage extends ImageContent {
  height: number,
  width: number
}

export interface PostData {
  title: string,
  slug: string,
  frontImage: FrontImage,
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
  payload: Array<GalleryImage>
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
export class Post implements OnChanges, OnInit, OnDestroy {
  private frontImageAspectRatio: number

  @Input() postData: PostData

  title: string
  frontImage: FrontImage
  mainContent: PostMainContent

  frontImageContainerStyles: object
  articleStyles: object
  frontImageHeight: number

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
      left: `-${frontImageLeftPos}px`,
      height: `${this.frontImageHeight}px`
    }
  }

  // article lies on 1/4 of frontImage
  setArticlePosition = () => {
    this.frontImageHeight = window.innerWidth * this.frontImageAspectRatio // frontImage width === window.innerWidth
    const marginTop = this.frontImageHeight * 0.25
    this.articleStyles = {
      marginTop: `-${marginTop}px`
    }
  }

  ngOnChanges() {
    this.title = this.postData.title
    this.frontImage = this.postData.frontImage
    this.mainContent = this.postData.mainContent

    this.frontImageAspectRatio = this.frontImage.height / this.frontImage.width
    this.setArticlePosition()
    window.addEventListener('resize', this.setArticlePosition)
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
