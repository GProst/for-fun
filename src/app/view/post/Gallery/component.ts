import {Component, Input} from '@angular/core'

import {GallerySliderService} from '../../services/gallery-slider.service'

import {Slide} from '../../gallery-slider/GallerySlider/component'
import {ImageContent} from '../../common-bricks/Image/component'

export interface GalleryImage extends ImageContent {
  slide: Slide
}

@Component({
  selector: 'gp-gallery',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Gallery {
  @Input() images: Array<GalleryImage>

  constructor(private sliderService: GallerySliderService) {}

  setImgClass(index: number): object {
    return {
      'gallery-img': true,
      'long-img': index === 3
    }
  }

  onImgClick(index: number) {
    this.sliderService.triggerSlider(index, this.images.map(image => image.slide))
  }
}
