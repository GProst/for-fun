import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {TwitterIcon} from './@icon@Twitter/component'
import {StackOverflowIcon} from './@icon@StackOverflow/component'
import {GitHybIconIcon} from './@icon@GitHub/component'
import {LinkedInIcon} from './@icon@LinkedIn/component'
import {Image} from './Image/component'
import {CloseIcon} from './@icon@Close/component'
import {ChevronLeftIcon} from './@icon@ChevronLeft/component'
import {ChevronRightIcon} from './@icon@ChevronRight/component'
import {Loader} from './Loader/component'

@NgModule({
  declarations: [
    TwitterIcon, StackOverflowIcon, GitHybIconIcon, LinkedInIcon, Image, CloseIcon, ChevronLeftIcon, ChevronRightIcon,
    Loader
  ],
  imports: [BrowserModule],
  exports: [
    TwitterIcon, StackOverflowIcon, GitHybIconIcon, LinkedInIcon, Image, CloseIcon, ChevronLeftIcon, ChevronRightIcon,
    Loader
  ]
})
export class CommonBricksModule {}
