import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AngularMaterialModule} from '../angular-material/module'

import Footer from './Footer/component'

@NgModule({
  declarations: [Footer],
  imports: [BrowserModule, AngularMaterialModule],
  exports: [BrowserModule, AngularMaterialModule, Footer]
})
export default class AtomsModule {}
