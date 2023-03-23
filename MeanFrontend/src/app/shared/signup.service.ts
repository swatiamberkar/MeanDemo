import { Injectable } from '@angular/core';
import { Signup } from '../allClasses/signup';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SignupService {
  private baseUrl:string = environment.apiUrl 
  private signup:Signup = new Signup()
  private headers= new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  createUser(signup:Signup){
    return this.http.post(this.baseUrl+ '/createUser', signup, {headers:this.headers})
  }

  readUser(){
    return this.http.get(this.baseUrl + '/readUser', {headers:this.headers})
  }
}
