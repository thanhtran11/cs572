import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      smart works!
      <app-dump [entertaiments]="entertaiments" [appIsVisible]=true
      [ngStyle]="{'font-size':'15px'}" appMakeBigger></app-dump>
      {{str|multi:3}}      
    </p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  //album = {song: "Blank Space", artist:"Taylor Swift"}
  entertaiments = ["walking", "music", "tv"];
  str = "Asaad";
  constructor() { }

  ngOnInit() {
  }

}
