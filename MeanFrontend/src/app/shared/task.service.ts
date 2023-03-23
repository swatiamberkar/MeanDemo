import { Injectable } from '@angular/core';
import { Task } from '../allClasses/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl:string = environment.apiUrl 
  private task:Task = new Task()
  private headers= new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  createTask(task:Task){
    return this.http.post(this.baseUrl+ '/createTask', task, {headers:this.headers})
  }

  readTask(){
    return this.http.get(this.baseUrl + '/readTask', {headers:this.headers})
  }
}
