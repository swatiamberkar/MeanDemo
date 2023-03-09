import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CountryService } from 'src/app/shared/country.service';
import { Country } from 'src/app/country';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router,
               private countryService:CountryService) { }

  ngOnInit(): void {
  }

  newCountry(event:any){
    event.preventDefault();
    this.countryService.setter(new Country())
    this.router.navigate(['/createUpdate'])

  }
}
