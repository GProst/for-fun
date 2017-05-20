import {Component, Input} from '@angular/core'

@Component({
  selector: 'gp-img',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ImageAtom {
  @Input() src: string
  @Input() srcSet: string
  @Input() alt: string
  @Input() sizes: string
  @Input() title: string
  @Input() imgClass: string
}
