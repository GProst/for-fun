import {Component, ViewChild} from '@angular/core'
import {Router} from '@angular/router'
import {MdTooltip} from '@angular/material'

@Component({
  selector: 'gp-header',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Header {
  @ViewChild(MdTooltip) tooltip: MdTooltip

  tabs = [
    {
      label: 'Posts',
      path: '/posts'
    },
    {
      label: 'About',
      path: '/about'
    }
  ]

  constructor(
    private router: Router
  ) {}

  onBtnClick(path: string) {
    this.router.navigate([path])
  }

  onAvatarTouch (event: TouchEvent) {
    event.preventDefault()
    this.tooltip.show(0)
  }
}
