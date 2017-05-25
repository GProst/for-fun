import {Component, Input} from '@angular/core'

import {GallerySliderService} from '../../services/gallery-slider.service'

import {Slide} from '../../molecules/GallerySlider/component'

@Component({
  selector: 'gp-gallery',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GalleryMolecule {
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
