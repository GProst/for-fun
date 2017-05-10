import {NgModule} from '@angular/core'
import {AngularMaterialModule} from '../angular-material/module'
import {BrowserModule} from '@angular/platform-browser'

import Header from './Header/component'

@NgModule({
  declarations: [Header],
  imports: [BrowserModule, AngularMaterialModule],
  exports: [Header, AngularMaterialModule, BrowserModule]
})
export default class OrganismsModule {}
