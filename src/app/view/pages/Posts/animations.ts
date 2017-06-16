import {AnimationEntryMetadata} from '@angular/core'
import {animate, group, query, style, transition, trigger} from '@angular/animations'

export const routeAnimation: AnimationEntryMetadata =
  trigger('nestedPostsRouteAnimation', [
    transition('* => *', [
      group([
        query(':enter', [
          style({
            top: 0,
            opacity: 0,
            transform: 'translate(-100%, -50%)'
          }),
          animate('0.3s 0.2s ease-in', style({
            top: 0,
            opacity: 1,
            transform: 'translate(0, -50%)'
          }))
        ], {optional: true}),
        query(':leave', [
          style({
            top: 0,
            transform: 'translate(0, -50%)'
          }),
          animate('0.3s 0.2s ease-in',  style({
            opacity: 0,
            transform: 'translate(100%, -50%)'
          }))
        ], {optional: true})
      ])
    ])
  ])
