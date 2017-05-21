import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject'

import {ImageContent} from '../atoms/Image/component'

export type sliderDataType = {
  slideIndex: number,
  slides: Array<ImageContent>
}

@Injectable()
export class GallerySliderService {
  private sliderTriggeredSource = new Subject<sliderDataType>()

  sliderTriggered$ = this.sliderTriggeredSource.asObservable()

  triggerSlider(slideIndex: number, slides: Array<ImageContent>) {
    this.sliderTriggeredSource.next({slideIndex, slides})
  }
}
