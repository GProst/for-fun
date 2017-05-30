import {Component} from '@angular/core'

@Component({
  selector: 'gp-footer',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Footer {
  isGTXS() {
    return window.innerWidth >= 600
  }
}
