import { Injectable } from '@angular/core';
import { Employee } from '../allClasses/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseUrl:string = environment.apiUrl 
  private employee:Employee = new Employee()
  private headers= new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  createEmployee(employee:Employee){
    return this.http.post(this.baseUrl+ '/createEmployee', employee, {headers:this.headers})
  }

  readEmployee(){
    return this.http.get(this.baseUrl + '/readEmployee', {headers:this.headers})
  }
}
