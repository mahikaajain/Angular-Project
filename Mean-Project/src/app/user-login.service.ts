import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService 
{


  constructor(private http:HttpClient) { }
  public doRegistration(user:User){
      
    return this.http.post("http://localhost:8080/create",user,{responseType:'text' as 'json'});
  }
  public gettingCredentials()
  {
    return this.http.get("http://localhost:8080/getAll");
  }
}
