import { Component, OnInit } from '@angular/core';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'ngapp';
  constructor(private randomUserService: RandomUserService){}

  ngOnInit(){
    this.randomUserService.getOnlineData();
  }
}
