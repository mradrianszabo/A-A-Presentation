import { animate, animateChild, animation, group, query, state, style, transition, trigger, useAnimation } from "@angular/animations";


export const childStyle = animation([
  style({
    'background-color' : 'red',
  }),
  animate('2s ease')
]);

export const MODULE3 ={
  example1:
  trigger('example1Trigger', [
    state('false', style({
      backgroundColor : '*',
    })),
    state('true', style({
      backgroundColor : 'orange',
    })),
    transition('true<=>false', [
      group([
        query('@example2Trigger', animateChild()),
        animate('1s ease')
      ])
    ])
  ]),
  example2:
  trigger('example2Trigger', [
    state('0', style({
      transform: 'translateX(0)'
    })),
    state('1', style({
      transform: 'translateX({{distance}}px)'
    }), {params: {distance: 0}}),
    transition('0<=>1', useAnimation(childStyle)
    )
  ]),
  example3:
  trigger('example3Trigger', [
    state('0', style({
      transform: 'translateX(0)'
    })),
    state('1', style({
      transform: 'translateX(100px)'
    })),
    transition('0<=>1', animate('2s ease')
    )
  ]),

  routeAnimations:
  trigger('routeAnimations', [
/*     transition('module2 <=> module3', [
      style({
        position: 'relative'
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        }),
        group([
          query(':leave', [
            animate('1000ms ease', style({
              left: '-100%'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('1000ms ease', style({
              left: 0
            }))
          ], { optional: true })
        ])
      ],{ optional: true })
    ]) */
    transition('module2 => module3', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]),
    transition('module3 => module2', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]),
  ]),
}

