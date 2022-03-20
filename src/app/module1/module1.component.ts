import { Component, OnInit } from '@angular/core';
import { MODULE1 } from './module1.animations';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss'],
  animations: [
    MODULE1.example1,
    MODULE1.example2,
    MODULE1.example3,
  ]
})
export class Module1Component implements OnInit {
  public state1: string = 'square'
  public state3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
