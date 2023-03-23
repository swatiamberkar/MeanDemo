import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/allClasses/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public employee: Employee = new Employee;

  constructor(private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  showSuccess(message: string) {
    this.toastr.success(message)
  }
  
    create() {
      this.employeeService.createEmployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/listEmployee']);
          this.showSuccess('Registration successfullt!!! Please Login...')
        },
        error => {
          console.log(error);

        }
      )
    }


}
