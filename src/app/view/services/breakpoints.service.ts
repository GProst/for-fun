import {Injectable} from '@angular/core'

@Injectable()
export class BreakpointsService {
  isGTSM(): boolean {
    return window.innerWidth >= 960 // see breakpoint table (TODO: wiki link)
  }

  isGTMD(): boolean {
    return window.innerWidth >= 1280 // see breakpoint table (TODO: wiki link)
  }

  isGTXS() {
    return window.innerWidth >= 600
  }
}
