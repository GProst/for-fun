import {Component, Input} from '@angular/core'

import {GallerySliderService} from '../../data-services/gallery-slider.service'

import {Slide} from '../../gallery-slider/GallerySlider/component'

@Component({
  selector: 'gp-gallery',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Gallery {
  @Input() images: Array<Slide>

  constructor(private sliderService: GallerySliderService) {}

  setImgClass(index: number): object {
    return {
      img: true,
      'long-img': index === 3
    }
  }

  onImgClick(index: number) {
    this.sliderService.triggerSlider(index, this.images)
  }
}
