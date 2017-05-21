import {Component} from '@angular/core'
import {GallerySliderService, sliderDataType} from '../../services/gallery-slider.service'

@Component({
  selector: 'gp-gallery-slider-container',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GallerySliderContainerOrganism {
  isActive: boolean = false

  public sliderData: sliderDataType

  onSliderClose() {
    this.isActive = false
  }

  activateSlider = (sliderData: sliderDataType) => {
    this.sliderData = sliderData
    this.isActive = true
  }

  constructor(public sliderService: GallerySliderService) {
    this.sliderService.sliderTriggered$.subscribe(this.activateSlider)
  }
}
