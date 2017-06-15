import {AnimationEntryMetadata} from '@angular/core'
import {animate, style, transition, trigger, query, animateChild, group} from '@angular/animations'

export const slideAway: AnimationEntryMetadata =
  trigger('routeAnimation', [
    transition('posts => post', [
      group([
        query(':leave', [
          group([
            query(':leave', [ // override nested route (PostList) animation (nested route should stay still)
              animate('0.5s', style({
                opacity: 1,
                transform: 'translateX(0)'
              }))
            ], {optional: true}),
            query(':self', [
              style({
                position: 'absolute',
                top: 0,
              }),
              animate('0.5s ease-in-out', style({
                opacity: 0,
                transform: 'translateX(-100%)'
              }))
            ])
          ]),
        ], {optional: true, limit: 1 /* getting only root container (Posts page) */}),
        query('@pageAnimation', [animateChild({delay: 300})]),
      ])
    ]),
    transition('post => posts', [
      query(':leave', [
        style({
          position: 'absolute',
          top: 0,
        }),
        group([
          query('@enterAnimation', [animateChild()]),
          animate('0.5s ease-in-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ]),
      ], {limit: 1}),
      query('@*', [animateChild({delay: -300})]), // after :leave animate all elements in /posts page
    ])
    // TODO: post => post
  ])
