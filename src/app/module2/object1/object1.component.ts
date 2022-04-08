import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-object1',
  templateUrl: './object1.component.html',
  styleUrls: ['./object1.component.scss']
})
export class Object1Component implements OnInit {
  @Input() public counter: number;

  constructor() { }

  ngOnInit(): void {
  }

  public getPosition(): string{
    const color = this.counter === 1 ? 'green' : 'blue';
    return `transform: translateX(${this.counter*this.counter}px)`
  }

}
