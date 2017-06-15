import {AnimationEntryMetadata} from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations'

export const slideFrom: AnimationEntryMetadata =
  trigger('enterAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
        display: 'block' // FixMe: something causes display: none if this not set -> figure out what
      })
    ),
    transition('void => from-right', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate('0.3s 0.2s ease-in')
    ]),
    transition('void => from-left', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.3s 0.2s ease-in')
    ]),
    transition(':leave', [animate('0.3s')]),
  ])
