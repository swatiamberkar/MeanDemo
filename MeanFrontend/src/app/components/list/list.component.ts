import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/country.service';
import { Country } from '../../country'
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public countries: any = []

  constructor(private _countryService: CountryService,
              private router:Router) { }

  ngOnInit(): void {
    this.readCountries();
  }

  readCountries() {
    this._countryService.readCountries().subscribe(
      data => {
        console.log(data);
        this.countries = data
      },
      error => {
        console.log(error);
      }
    )
  }

  doUpdate(country: Country){
    this._countryService.setter(country)
    this.router.navigate(['/createUpdate'])
  }

  doDelete(country:Country){
    this._countryService.deleteCountries(country._id).subscribe(
      data=>{
        this.countries.splice(this.countries.indexOf(country), 1)
      },
      error =>{
        console.log(error);
      }
    )

  }
}
