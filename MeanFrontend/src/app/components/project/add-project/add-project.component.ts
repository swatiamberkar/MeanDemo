import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/allClasses/project';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public project: Project = new Project;

  constructor(private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  showSuccess(message: string) {
    this.toastr.success(message)
  }
  
    create() {
      this.projectService.createProject(this.project).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/listProject']);
          this.showSuccess('Project Added Successfully')
        },
        error => {
          console.log(error);

        }
      )
    }



}
