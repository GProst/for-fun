// Polyfill
import 'core-js/client/shim.min'
import { enableProdMode } from '@angular/core'

import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import './fonts'
import './index.scss'

import { AppModule } from './app/app.module'

// Enable production mode unless running locally
if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
