import {Component} from '@angular/core'
import {GallerySliderService} from '../../services/gallery-slider.service'
import {SliderData} from '../../molecules/GallerySlider/component'

@Component({
  selector: 'gp-gallery-slider-container',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GallerySliderContainerOrganism {
  isActive: boolean = false

  public sliderData: SliderData

  onSliderClose() {
    this.isActive = false
  }

  activateSlider = (sliderData: SliderData) => {
    this.sliderData = sliderData
    this.isActive = true
  }

  constructor(public sliderService: GallerySliderService) {
    this.sliderService.sliderTriggered$.subscribe(this.activateSlider)
  }
}
