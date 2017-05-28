import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AngularMaterialModule} from '../third-party/angular-material/module'
import {FlexLayoutModule} from '@angular/flex-layout'

import {TwitterIcon} from './@icon@Twitter/component'
import {StackOverflowIcon} from './@icon@StackOverflow/component'
import {GitHybIconIcon} from './@icon@GitHub/component'
import {LinkedInIcon} from './@icon@LinkedIn/component'
import {Image} from './Image/component'
import {CloseIcon} from './@icon@Close/component'
import {ChevronLeftIcon} from './@icon@ChevronLeft/component'
import {ChevronRightIcon} from './@icon@ChevronRight/component'

@NgModule({
  declarations: [
    TwitterIcon, StackOverflowIcon, GitHybIconIcon, LinkedInIcon, Image, CloseIcon,
    ChevronLeftIcon, ChevronRightIcon
  ],
  imports: [BrowserModule, AngularMaterialModule, FlexLayoutModule],
  exports: [
    BrowserModule, AngularMaterialModule, FlexLayoutModule, TwitterIcon, StackOverflowIcon, GitHybIconIcon,
    LinkedInIcon, Image, CloseIcon, ChevronLeftIcon, ChevronRightIcon
  ]
})
export class CommonBricksModule {}
