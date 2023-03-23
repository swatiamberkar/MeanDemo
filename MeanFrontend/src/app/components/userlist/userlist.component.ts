import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/signup.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public users:any  = []

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    this.readUser()
  }

  readUser(){
    this.signupService.readUser().subscribe(
      data => {
        console.log(data);
        this.users=data
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
