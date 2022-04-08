import { animate, state, style, transition, trigger } from "@angular/animations";

export const MODULE1 ={
  example1:
  trigger('example1Trigger', [
    state('square', style({
      backgroundColor : 'greenyellow',
      borderRadius : '0',
      transform: 'translateX(0)',
    })),
    state('circle', style({
      backgroundColor : 'orange',
      borderRadius: '50%',
      transform: 'translateX(100%)',
    })),
    transition('square<=>circle', [
      animate('1s ease')
    ])
  ]),
  example2:
  trigger('example2Trigger', [
    state('0', style({
      backgroundColor : 'red'
    })),
    state('1', style({
      backgroundColor : 'green'
    })),
    transition('0<=>1',
      animate('1s linear')
    )
  ]),
  example3:
  trigger('example3Trigger', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('1s ease',
        style({
          transform: 'translateX(0)'
        }))
    ]),
    transition(':leave', [
      style({
        transform: 'translateX(0)'
      }),
      animate('1s ease',
      style({
        transform: 'translateX(-100%)'
      }))
    ])
  ])
}
