import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/allClasses/timesheet';
import { TimesheetService } from 'src/app/shared/timesheet.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';
import { ProjectService } from 'src/app/shared/project.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss']
})
export class AddTimesheetComponent implements OnInit {

  public timesheet: Timesheet = new Timesheet;
  public tasks: any = []
  public projects: any = []
  public selectedLevel = ''
  selectedDate!: NgbDate;

  constructor(private timesheetService: TimesheetService,
    private toastr: ToastrService,
    private router: Router,
    private taskService: TaskService,
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject()
    this.getTask()
  
  }

  showSuccess(message: string) {
    this.toastr.success(message)
  }

  getProject() {
    this.projectService.readProject().subscribe(
      data => {
        this.projects = data
      },
      error => {
        console.log(error);

      }
    )
  }
  getTask() {
    this.taskService.readTask().subscribe(
      data => {
        this.tasks = data
      },
      error => {
        console.log(error);

      }
    )
  }

  addTimesheet() {
    this.timesheetService.addTimesheet(this.timesheet).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/addTimesheet']);
        this.showSuccess('Timesheet Added Successfully')
      },
      error => {
        console.log(error);

      }
    )
  }

  selected() {
    console.log(this.selectedLevel)
  }





}
