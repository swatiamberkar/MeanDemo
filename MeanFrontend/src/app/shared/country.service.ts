import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Country } from '../country'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country: Country = new Country;
  private baseUrl:string = "http://localhost:3000"
  private headers = new  HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http:HttpClient) { }

  createCountry(country:Country){
    return this.http.post(this.baseUrl + '/create', country, {headers:this.headers})
  }

  readCountries(){
    return this.http.get(this.baseUrl + '/read', {headers:this.headers})
  }

  updateCountry(id:string, country:Country){
    return this.http.put(this.baseUrl + '/update/' + id, country, {headers:this.headers})
  }

  deleteCountries(id:string){
    return this.http.delete(this.baseUrl + '/delete/'+id, {headers:this.headers})
  }

  setter(country:Country){
    this.country = country
  }

  getter(){
    return this.country
  }
}
