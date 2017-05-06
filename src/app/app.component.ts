import './app.component.sass'
import { Component } from '@angular/core';

@Component({
  selector: 'gp-app',
  template: require('./app.component.html')
})
export class AppComponent { name = 'German'; }
