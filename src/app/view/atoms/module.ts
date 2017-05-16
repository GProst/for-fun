import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AngularMaterialModule} from '../angular-material/module'
import {FlexLayoutModule} from '@angular/flex-layout'

import {TwitterIconAtom} from './@icon@Twitter/component'
import {StackOverflowIconAtom} from './@icon@StackOverflow/component'
import {GitHybIconIconAtom} from './@icon@GitHub/component'
import {LinkedInIconAtom} from './@icon@LinkedIn/component'

@NgModule({
  declarations: [TwitterIconAtom, StackOverflowIconAtom, GitHybIconIconAtom, LinkedInIconAtom],
  imports: [BrowserModule, AngularMaterialModule, FlexLayoutModule],
  exports: [BrowserModule, AngularMaterialModule, FlexLayoutModule, TwitterIconAtom, StackOverflowIconAtom,
    GitHybIconIconAtom, LinkedInIconAtom
  ]
})
export class AtomsModule {}
