import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Timesheet } from '../allClasses/timesheet';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private baseUrl:string = environment.apiUrl 
  private timesheet:Timesheet = new Timesheet()
  private headers= new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  addTimesheet(timesheet:Timesheet){
    return this.http.post(this.baseUrl+ '/addTimesheet', timesheet, {headers:this.headers})
  }

  timesheetReport(){
    return this.http.get(this.baseUrl + '/timesheetReport', {headers:this.headers})
  }

}
