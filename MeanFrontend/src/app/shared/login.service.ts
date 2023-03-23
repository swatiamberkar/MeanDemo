import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:string = environment.apiUrl 
  private loginUrl = this.baseUrl+ '/login';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http
      .post(this.loginUrl, { username, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
        })
      );
  }
}
