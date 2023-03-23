import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/allClasses/task';
import { TaskService } from 'src/app/shared/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public task: Task = new Task;

  constructor(private taskService: TaskService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  showSuccess(message: string) {
    this.toastr.success(message)
  }
  
    create() {
      this.taskService.createTask(this.task).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/listTask']);
          this.showSuccess('Project Added Successfully')
        },
        error => {
          console.log(error);

        }
      )
    }





}
