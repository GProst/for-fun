import {Component, ViewChild} from '@angular/core'
import {Router} from '@angular/router'
import {MdTooltip} from '@angular/material'

import headerContent from '../../../model/header' // TODO: service

@Component({
  selector: 'gp-header',
  template: require('./component.html'),
  styles: [require('./component.sass')]
})
export default class HeaderOrganism {
  @ViewChild(MdTooltip) tooltip: MdTooltip

  tabs = headerContent.tabs

  constructor(
    private router: Router
  ) {}

  onBtnClick(path: string) {
    this.router.navigate([path])
  }

  onAvatarTouch (event: any) { // TODO: TouchEvent interface
    event.preventDefault()
    this.tooltip.show(0)
  }
}
