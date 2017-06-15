import {AnimationEntryMetadata} from '@angular/core'
import {animateChild, query, transition, trigger} from '@angular/animations'

export const pageAnimation: AnimationEntryMetadata =
  trigger('pageAnimation', [
    transition(':enter', [
      query('@*', [animateChild()], {optional: true})
    ]),
    transition('* => posts-loaded', [
      query(':leave', [animateChild()], {optional: true}),
      query(':enter', [animateChild({delay: 200})], {optional: true})
    ])
  ])
