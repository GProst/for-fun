import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core'

export const slideAway: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition('void => to-right', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate('0.3s 0.2s ease-in')
    ]),
    transition('void => to-left', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.3s 0.2s ease-in')
    ]),
    transition('to-right => void', [
      style({
        position: 'absolute',
        top: 0,
      }),
      animate('0.3s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ]),
    transition('to-left => void', [
      style({
        position: 'absolute',
        top: 0,
      }),
      animate('0.3s ease-out', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }))
    ])
  ])
