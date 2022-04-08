import { animate, animateChild, group, keyframes, query, sequence, stagger, state, style, transition, trigger } from "@angular/animations";

export const MODULE2 = {
  example1:
  trigger('example1Trigger', [
    transition(':enter',[
      query(':enter', [
        style({transform: 'translateX(-100%)'}),
        stagger(200, [
          animate('1000ms linear', style({
            opacity: 1, transform: 'translateX(0)'
          }))
        ])
      ])
    ]),
    transition(':leave', [
      query(':leave', [
        style({
          transform: 'translateX(0)'
        }),
        stagger(200, [
          animate('1s linear', style({
            transform: 'translateX(-100%)'
          }))
        ])
      ])
    ])
  ]),
  example2:
  trigger('example2Trigger', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)',
        backgroundColor: 'blue',
        borderRadius: '50%',
      }),
      sequence([
        animate('1s ease', style({
          transform: 'translateX(0)'
        })),
        animate('2s linear', style({
        borderRadius: '0',
        backgroundColor: 'green',
        }))
      ])
    ]),
    transition(':leave', [
      style({
        transform: 'translateX(0)',
        borderRadius: '0',
        backgroundColor: 'green',
      }),
      sequence([
        animate('1s ease', style({
          backgroundColor: 'blue',
          borderRadius: '50%',
        })),
        animate('2s ease', style({
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]),
  example3:
  trigger('example3Trigger', [
    transition(':enter', [
      style({
        transform: 'translateX(-100%)',
        borderRadius: '50%',
        backgroundColor: 'blue',
      }),
      group([
        animate('1s ease', style({
          transform: 'translateX(0)',
          borderRadius: '0',
        })),
        animate('3s linear', style({
          backgroundColor: 'green'
        }))
      ])
    ]),
    transition(':leave', [
      style({
        transform: 'translateX(0)',
        backgroundColor: 'green',
        borderRadius: '0',
      }),
      group([
        animate('1s ease', style({
          backgroundColor: 'blue',
          borderRadius: '50%',
        })),
        animate('3s ease', style({
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]),
  example4:
  trigger('example4Trigger', [
    state('false', style({
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
      border: '4px solid blue',
      borderRadius: '0'
    })),
    state('true', style({
      width: '75px',
      height: '75px',
      backgroundColor: 'blue',
      border: '2px solid white',
      borderRadius: '50%'
    })),
    transition('false=>true', animate('4s ease', keyframes([
      style({width: '75px', backgroundColor: 'blue', offset: 0.2}),
      style({height: '75px', border: '2px solid white', offset: 0.8}),
      style({borderRadius: '50%', offset: 1})
    ]))),
    transition('true=>false', animate('2s linear', keyframes([
      style({borderRadius: '0', height: '50px', offset: 0.3}),
      style({width: '50px', backgroundColor: 'red', border: '4px solid blue', offset: 1})
    ])))
  ])
}
