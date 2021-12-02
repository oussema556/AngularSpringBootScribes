import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Pages/General/register/register.component';
import { LoginComponent } from './Pages/General/login/login.component';
import { ForgetPasswordComponent } from './Pages/General/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/General/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http'
import {UserRegistrationServiceService} from "./Services/user-registration-service.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserRegistrationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
