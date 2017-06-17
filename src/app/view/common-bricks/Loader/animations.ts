import {AnimationEntryMetadata} from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/core'

export const fadeInOut: AnimationEntryMetadata =
  trigger('loaderAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.5s 0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-in', style({
        opacity: 0
      }))
    ])
  ])
