import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  singUp(user: string, password: string) {
    let body: any = {
      'user': user,
      'password': password
    }
    return this.httpClient.post("https://sheetdb.io/api/v1/4ql8le9nqsyzl", body)
  }
}
