// Polyfill
import 'core-js/client/shim.min'

import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import './index.sass'

import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
