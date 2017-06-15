import {AnimationEntryMetadata} from '@angular/core'
import {animate, style, transition, trigger, query, animateChild, group} from '@angular/animations'

export const slideAway: AnimationEntryMetadata =
  trigger('routeAnimation', [
    transition('posts => post', [
      group([
        query(':leave', [
          group([
            query('@postListAnimation', [ // override nested route animation (nested route should stay still)
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
        ], {optional: true, limit: 1 /* getting only root container (/posts page) */}),
        query('@postPageAnimation', [animateChild({delay: 300})]), // entering postPage animations
      ])
    ]),
    transition('post => posts', [
      query(':leave', [
        style({
          position: 'absolute',
          top: 0,
        }),
        group([
          query('@postContainerAnimation', [animateChild()]), // stay still (not move)
          animate('0.5s ease-in-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ]),
      ], {limit: 1  /* getting only root container (/post page) */}),
      query('@*', [animateChild({delay: -300})]), // entering page animations FixMe: pageAnimation
    ])
    // TODO: post => post
  ])
