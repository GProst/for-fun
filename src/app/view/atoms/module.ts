import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AngularMaterialModule} from '../angular-material/module'
import {FlexLayoutModule} from '@angular/flex-layout'

import TwitterIcon from './@icon@Twitter/component'
import StackOverflowIcon from './@icon@StackOverflow/component'
import GitHybIcon from './@icon@GitHub/component'
import LinkedInIcon from './@icon@LinkedIn/component'

@NgModule({
  declarations: [TwitterIcon, StackOverflowIcon, GitHybIcon, LinkedInIcon],
  imports: [BrowserModule, AngularMaterialModule, FlexLayoutModule],
  exports: [BrowserModule, AngularMaterialModule, FlexLayoutModule, TwitterIcon, StackOverflowIcon, GitHybIcon, LinkedInIcon]
})
export default class AtomsModule {}
