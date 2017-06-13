import {AnimationEntryMetadata} from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations'

export const slideFromLeft: AnimationEntryMetadata =
  trigger('enterAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.3s 0.2s ease-in')
    ])
  ])
