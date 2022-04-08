import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MODULE3 } from './module3/module3.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    MODULE3.routeAnimations
  ]
})
export class AppComponent {


public getRouteAnimationData(outlet: RouterOutlet){
  return outlet?.activatedRouteData?.['animation'];
}
}
