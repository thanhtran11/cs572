import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)=decrease()>-</button>&nbsp;
  <label>{{counterValue}}</label>&nbsp;
  <button (click)=increase()>+</button>
    
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue = 5;
  @Input() counter;

  @Output() counterChange = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
    this.counterValue = this.counter;    
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue.toString());
  }

  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue.toString());
  }
}
