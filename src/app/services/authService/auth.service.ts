import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'my_api_backend_url'
  constructor(private http: HttpClient) { }

  //Метод для отправки номера телефона и получения кода подтверждения
  sendPhoneNumber(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-code`, {phoneNumber})
  }

  //Метод для отправки кода подтверждения и получения токена
  verifyCode(code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verifyCode`, {code})
  }
}
