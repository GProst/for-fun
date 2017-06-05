import {Injectable} from '@angular/core'
import {NavigationStart, Router} from '@angular/router'

@Injectable()
export class RoutingService {
  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        this.prevRouteUrl = this.currentRouteUrl // when app initialize it will be equal undefined, but that's OK
        const {url} = event
        this.currentRouteUrl = url // when app initialize it will be equal initial route url
      })
  }

  private currentRouteUrl: string
  public prevRouteUrl: string
}
