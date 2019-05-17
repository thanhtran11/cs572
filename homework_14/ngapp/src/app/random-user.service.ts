import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(public httpClient:HttpClient) { }

  getOnlineData(){
    return this.httpClient.get("https://randomuser.me/api/?result=10")
    .subscribe(res=>{
      localStorage.setItem("users", JSON.stringify(res));
    });
  }

  getCachedData(){
    return localStorage.getItem("users");
  }
}
