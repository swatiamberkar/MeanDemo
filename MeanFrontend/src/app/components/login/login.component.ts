import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public  username: string = ''
  public password: string = ''
  public errorMessage: string = ''
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.authenticate(this.username, this.password).subscribe(
      () => {
        // login successful
        this.router.navigate(['/welcome']);
      },
      (error) => {
        console.log(error)
        this.errorMessage = 'Invalid login credentials!!!'
      }
    );
  }



}
