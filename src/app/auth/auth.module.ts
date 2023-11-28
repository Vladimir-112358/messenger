import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../services/authService/auth.service";
import { LoginComponent } from "../components/login/login.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, MatInputModule, MatButtonModule, FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
