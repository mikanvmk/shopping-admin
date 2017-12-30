import { trigger,state,style,transition,animate } from '@angular/animations';

export function routerTransition() {
  return trigger('routerTransition', [
    state('void', style({
      position: 'fixed',
      width: '100%', height: '100%',
      'overflow-y': 'overlay',
      'overflow-x': 'hidden',
    })),
    state('*', style({
      position: 'fixed',
      width: '100%',
      height: '100%',
      'overflow-y': 'overlay',
      'overflow-x': 'hidden',
    })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

