import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';
  public componentCounterValue;
  readCounter(event){
    this.componentCounterValue = event;
  }
}
