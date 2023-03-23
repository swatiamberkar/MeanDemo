import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import{CountryService} from './shared/country.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { ListProjectComponent } from './components/project/list-project/list-project.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { AddTimesheetComponent } from './components/timesheet/add-timesheet/add-timesheet.component';
import { TimesheetReportComponent } from './components/timesheet/timesheet-report/timesheet-report.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

const appRoutes:Routes = [
  {path: '', component:ListComponent},
  {path: 'createUpdate', component:CreateUpdateComponent},
  {path: 'list', component:ListComponent},
  {path: 'home', component:HomeComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'userlist', component:UserlistComponent},
  {path: 'login', component:LoginComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'addEmployee', component:AddEmployeeComponent},
  {path: 'listEmployee', component:ListEmployeeComponent},
  {path: 'addProject', component:AddProjectComponent},
  {path: 'listProject', component:ListProjectComponent},
  {path: 'addTask', component:AddTaskComponent},
  {path: 'listTask', component:ListTaskComponent},
  {path: 'addTimesheet', component:AddTimesheetComponent},
  {path: 'timesheetReport', component:TimesheetReportComponent},
  {path: 'DatePicker', component:DatePickerComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    UserlistComponent,
    LoginComponent,
    WelcomeComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    AddProjectComponent,
    ListProjectComponent,
    AddTaskComponent,
    ListTaskComponent,
    AddTimesheetComponent,
    TimesheetReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton:true,
      progressBar:true
    }),
    NgbDatepickerModule, 
    FormsModule, 
    JsonPipe,
    //BsDatepickerModule.forRoot(),
    NgbModule
  ],
  providers: [CountryService],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
