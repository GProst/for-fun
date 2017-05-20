import {Component, ViewChild} from '@angular/core'
import {Router} from '@angular/router'
import {MdTooltip} from '@angular/material'

import {tabs} from '../../../model/header' // TODO: service

@Component({
  selector: 'gp-header',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class HeaderOrganism {
  @ViewChild(MdTooltip) tooltip: MdTooltip

  tabs = tabs

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
