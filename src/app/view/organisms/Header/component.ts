import {Component} from '@angular/core'
import {Router} from '@angular/router'
import _isUndefined from 'lodash-es/isUndefined'

import {MdTabChangeEvent} from '@angular/material'

import headerContent from '../../../model/header' // TODO: service

@Component({
  selector: 'gp-header',
  template: require('./component.html')
})
export default class HeaderOrganism {
  tabs = headerContent.tabs

  constructor(
    private router: Router
  ) {}

  getActiveTabIndx() {
    return this.tabs.findIndex(tab => tab.path === this.router.url)
  }

  onTabClick($event: MdTabChangeEvent) {
    const activeTab = this.tabs.find(tab => tab.label === $event.tab.textLabel)
    if (_isUndefined(activeTab)) {
      throw new Error(`no such label in tabs list: ${$event.tab.textLabel}`)
    }
    const {path} = activeTab
    this.router.navigate([path])
  }
}
