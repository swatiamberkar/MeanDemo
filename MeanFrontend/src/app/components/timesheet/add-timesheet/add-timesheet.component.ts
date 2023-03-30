import { Component, Injectable, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/allClasses/timesheet';
import { TimesheetService } from 'src/app/shared/timesheet.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';
import { ProjectService } from 'src/app/shared/project.service';
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';


@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
      
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	// format(date: NgbDateStruct | null): string {
  //   console.log(date)
	//   return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  //   const dd = moment(date).format('DD/MM/YYYY')
  //    dd
   
      
	// }

  format(date: NgbDateStruct): string {
    return date
      ? `${isNumber(date.day) ? padNumber(date.day) : ""}/${isNumber(date.month) ? padNumber(date.month) : ""}/${
          date.year
        }`
      : "";
  }
}

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss'],

  providers: [
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})

export class AddTimesheetComponent implements OnInit {

  public timesheet: Timesheet = new Timesheet;
  public tasks: any = []
  public projects: any = []
  public selectedLevel = ''
  entryDate!: NgbDate;
  taskDate!: NgbDate;
  model: NgbDateStruct | undefined;
  //selectedDate ='';
 
  constructor(private timesheetService: TimesheetService,
    private toastr: ToastrService,
    private router: Router,
    private taskService: TaskService,
    private projectService: ProjectService,
    private calendar: NgbCalendar,
    private ngbCalendar: NgbCalendar,
		private dateAdapter: NgbDateAdapter<string>)
  { }

  ngOnInit(): void {
    this.getProject()
    this.getTask()
    this.processDateValue();
  }

  formatInString(date:any): string {
    return date
      ? `${isNumber(date.day) ? padNumber(date.day) : ""}/${isNumber(date.month) ? padNumber(date.month) : ""}/${
          date.year
        }`
      : "";
  }

  selectToday() {
		this.model = this.calendar.getToday();
    console.log(this.model)
	}

  private processDateValue(){
		let date = this.calendar.getToday();
    this.entryDate = date
    this.taskDate = date
    this.timesheet.entryDate = this.formatInString(this.entryDate);
    this.timesheet.taskDate = this.formatInString(this.taskDate);
	}

  showSuccess(message: string): void {
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

  //private dateToString = (date) => `${date.year}-${date.month}-${date.day}`; 

  addTimesheet() {
    //this.timesheet.entryDate :NgbDate = this.entryDate

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
  }

}
