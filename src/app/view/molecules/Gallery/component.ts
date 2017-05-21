import {Component, Input} from '@angular/core'

import {GallerySliderService} from '../../services/gallery-slider.service'

import {ImageContent} from '../../atoms/Image/component'

@Component({
  selector: 'gp-gallery',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GalleryMolecule {
  @Input() images: Array<ImageContent>

  constructor(private sliderService: GallerySliderService) {}

  setImgClass(index: number): object {
    return {
      img: true,
      'thumbnail-img': index !== 0,
      'front-img': index === 0
    }
  }

  onImgClick(index: number) {
    this.sliderService.triggerSlider(index, this.images)
  }
}
