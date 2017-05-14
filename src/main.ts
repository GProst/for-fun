// Polyfill
import 'core-js/client/shim.min'

import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import './index.scss'

import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
