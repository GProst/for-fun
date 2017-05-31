import {Component} from '@angular/core'

import {BreakpointsService} from '../../services/breakpoints.service'

@Component({
  selector: 'gp-footer',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Footer {
  public isGTXS: () => boolean

  constructor(private breakpointsService: BreakpointsService) {
    this.isGTXS = breakpointsService.isGTXS
  }
}
