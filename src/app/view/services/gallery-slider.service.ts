import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject'

import {SliderData, Slide} from '../gallery-slider/GallerySlider/component'

@Injectable()
export class GallerySliderService {
  private sliderTriggeredSource = new Subject<SliderData>()

  sliderTriggered$ = this.sliderTriggeredSource.asObservable()

  triggerSlider(slideIndex: number, slides: Array<Slide>) {
    this.sliderTriggeredSource.next({slideIndex, slides})
  }
}
