import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-users',
  template: `
      <div *ngFor="let user of users" > {{user}}
        </div>  
        <router-outlet></router-outlet>    
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  users:string[] = [];
  constructor(private radom:RandomUserService) { }

  ngOnInit() {

    let temp = JSON.parse(this.radom.getCachedData()).results;
    temp.forEach(element => {
        for (const key in element) {
          if (key === 'login'){
            const login = element[key]['uuid'];
            this.users.push(login)
          }
        }
    });
   
  }

}
