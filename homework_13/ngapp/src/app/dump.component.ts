import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `

  <p>dump works</p>
    <ul >
        <li *ngFor="let item of entertaiments">{{item}} </li>
    </ul>
  
  `,
  styles: []
})
export class DumpComponent implements OnInit {

  @Input() entertaiments;

  constructor() { }

  ngOnInit() {
  }

}
