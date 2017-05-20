import {Component, Input} from '@angular/core'

import {ImageContent} from '../../atoms/Image/component'

@Component({
  selector: 'gp-gallery',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GalleryOrganism {
  @Input() images: Array<ImageContent>

  setImgClass(index: number) {
    return {
      img: true,
      'thumbnail-img': index !== 0,
      'front-img': index === 0
    }
  }
}
