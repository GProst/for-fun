import {Component} from '@angular/core'
import {Router} from '@angular/router'

import headerContent from '../../../model/header' // TODO: service

@Component({
  selector: 'gp-header',
  template: require('./component.html'),
  styleUrls: ['./component.sass']
})
export default class HeaderOrganism {
  tabs = headerContent.tabs

  constructor(
    private router: Router
  ) {}

  onBtnClick(path: string) {
    this.router.navigate([path])
  }
}
