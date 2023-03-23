import { Injectable } from '@angular/core';
import { Project } from '../allClasses/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl:string = environment.apiUrl 
  private project:Project = new Project()
  private headers= new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  createProject(project:Project){
    return this.http.post(this.baseUrl+ '/createProject', project, {headers:this.headers})
  }

  readProject(){
    return this.http.get(this.baseUrl + '/readProject', {headers:this.headers})
  }
}
