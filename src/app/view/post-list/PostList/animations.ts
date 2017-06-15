import {AnimationEntryMetadata} from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations'

export const slideFromLeft: AnimationEntryMetadata =
  trigger('postListAnimation', [
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
      animate('0.4s 0.2s ease-in')
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      animate('0.3s 0.2s ease-in')
    ])
  ])
