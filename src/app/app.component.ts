import {Component} from '@angular/core'
import {Router} from '@angular/router'
import './app.component.sass'

import {MdTabChangeEvent} from '@angular/material'

@Component({
  selector: 'gp-app',
  template: require('./app.component.html')
})
export class AppComponent {
  constructor(private router: Router) {}

  onTabClick($event: MdTabChangeEvent) {
    let path
    switch ($event.tab.textLabel) {
      case 'Posts':
        path = '/posts'
        break
      case 'About':
        path = '/about'
        break
      default:
        throw new Error('unhandled textLabel!')
    }
    this.router.navigate([path])
  }
}
