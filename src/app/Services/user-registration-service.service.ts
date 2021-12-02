import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  constructor(private http:HttpClient) {  }

  public registration(user:User){
    return this.http.post("http://localhost:8080/register",user,{responseType: 'text' as 'json'})
  }
}
