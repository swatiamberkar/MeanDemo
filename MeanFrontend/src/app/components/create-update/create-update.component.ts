import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CountryService } from 'src/app/shared/country.service';
import { Country } from 'src/app/country';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})

export class CreateUpdateComponent implements OnInit {

  public country: Country = new Country;
  constructor(private router: Router,
    private countryService: CountryService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.country = this.countryService.getter()
  }

  showSuccess(message:string) {
    this.toastr.success(message);
  }

  createOrUpdate() {
    if(this.country._id==undefined)
    {
    this.countryService.createCountry(this.country).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
        this.showSuccess('Record Added Successfully!!')
      },
      error => {
        console.log(error);

      }
    )
    }
    else{
      this.countryService.updateCountry(this.country._id, this.country).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
          this.showSuccess('Record Updated Successfully!!')
        },
        error => {
          console.log(error);
  
        }
      )
    }
  }

}
