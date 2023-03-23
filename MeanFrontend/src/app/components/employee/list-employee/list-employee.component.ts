import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  public employees:any  = []

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.readUser()
  }

  readUser(){
    this.employeeService.readEmployee().subscribe(
      data => {
        console.log(data);
        this.employees=data
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
