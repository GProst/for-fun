import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core'

export const slideToRight: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':leave', [
      style({
        position: 'absolute',
        top: 0,
      }),
      animate('0.3s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ]),
  ])
