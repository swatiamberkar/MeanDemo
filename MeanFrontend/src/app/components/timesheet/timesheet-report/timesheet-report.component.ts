import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/shared/timesheet.service';

@Component({
  selector: 'app-timesheet-report',
  templateUrl: './timesheet-report.component.html',
  styleUrls: ['./timesheet-report.component.scss']
})
export class TimesheetReportComponent implements OnInit {

  public timesheets:any  = []

  constructor(private timesheetService:TimesheetService) { }

  ngOnInit(): void {
    this.timesheetReport()
  }

  timesheetReport(){
    this.timesheetService.timesheetReport().subscribe(
      data => {
        console.log(data);
        this.timesheets=data
      },
      error => {
        console.log(error);
        
      }
    )
  }


}
