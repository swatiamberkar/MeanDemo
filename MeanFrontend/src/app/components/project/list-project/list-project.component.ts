import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  public projects:any  = []

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.readUser()
  }

  readUser(){
    this.projectService.readProject().subscribe(
      data => {
        console.log(data);
        this.projects=data
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
