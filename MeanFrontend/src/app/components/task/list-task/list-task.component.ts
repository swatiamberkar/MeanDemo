import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  public tasks:any  = []

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.readUser()
  }

  readUser(){
    this.taskService.readTask().subscribe(
      data => {
        console.log(data);
        this.tasks=data
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
