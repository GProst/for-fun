import {AnimationEntryMetadata} from '@angular/core'
import {animateChild, query, transition, trigger} from '@angular/animations'

export const pageAnimation: AnimationEntryMetadata =
  trigger('postPageAnimation', [
    transition(':enter', [
      query('@*', [animateChild()], {optional: true})
    ]),
    transition('* => post-loaded', [
      query(':leave', [animateChild()], {optional: true}),
      query(':enter', [animateChild({delay: 400})], {optional: true})
    ])
  ])
