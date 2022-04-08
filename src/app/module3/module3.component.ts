import { Component, OnInit } from '@angular/core';
import { MODULE3 } from './module3.animations';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.scss'],
  animations: [
    MODULE3.example1,
    MODULE3.example2,
    MODULE3.example3,
  ]
})
export class Module3Component implements OnInit {
  public state1: boolean = false;
  public state2: boolean = false;
  public state3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  public state3Toggle(){
    this.state3 = !this.state3;
  }

}
