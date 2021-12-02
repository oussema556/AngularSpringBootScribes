import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from "../../../Models/User";
import {UserRegistrationServiceService} from "../../../Services/user-registration-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  message:String=""
  user: User = new User("", "", "")

  constructor(private service: UserRegistrationServiceService) {
  }

  ngOnInit(): void {

  }

  public register() {
    let respone = this.service.registration(this.user)
    respone.subscribe((data) => {
      this.message="Please check you email for the Verification Link"
    })

  }
}
