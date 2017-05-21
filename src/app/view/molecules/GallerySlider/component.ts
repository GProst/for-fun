import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core'
import {sliderDataType} from '../../services/gallery-slider.service'

import {ImageContent} from '../../atoms/Image/component'

@Component({
  selector: 'gp-gallery-slider',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GallerySliderMolecule implements OnChanges {
  @Input() sliderData: sliderDataType
  @Output() close = new EventEmitter()

  currentSlide: number
  slides: Array<ImageContent>

  ngOnChanges() {
    this.currentSlide = this.sliderData.slideIndex
    this.slides = this.sliderData.slides
  }
}
