import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/allClasses/signup';
import { SignupService } from 'src/app/shared/signup.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  public signup: Signup = new Signup;

  constructor(private signupService: SignupService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  showSuccess(message: string) {
    this.toastr.success(message)
  }
  
    create() {
      this.signupService.createUser(this.signup).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/login']);
          this.showSuccess('Registration successfullt!!! Please Login...')
        },
        error => {
          console.log(error);

        }
      )
    }
}
