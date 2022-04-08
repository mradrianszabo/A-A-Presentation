import { Component, OnInit } from '@angular/core';
import { MODULE2 } from './module2.animations';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss'],
  animations: [
    MODULE2.example1,
    MODULE2.example2,
    MODULE2.example3,
    MODULE2.example4,
  ]
})
export class Module2Component implements OnInit {
  public example1: string[] = ['one', 'two', 'three', 'four', 'five']
  public example1State: boolean = false;
  public example2State: boolean = false;
  public example3State: boolean = false;
  public example4State: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
