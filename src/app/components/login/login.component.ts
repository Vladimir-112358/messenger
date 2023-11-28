import { Component } from '@angular/core';
import { AuthService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // @ts-ignore
  phoneNumber: string;
  // @ts-ignore
  verificationCode: string;

  constructor(private authService: AuthService) {}

  sendCode() {
    this.authService.sendPhoneNumber(this.phoneNumber).subscribe(response => {
      // Обработка успешной отправки кода
      console.log('Code sent successfully', response);
    });
  }

  verifyCode() {
    this.authService.verifyCode(this.verificationCode).subscribe(response => {
      // Обработка успешной авторизации
      console.log('Authorization successful', response);
    });
  }
}
