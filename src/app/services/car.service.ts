import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/cars/getcardetails"
 
  getCar():Observable<CarResponseModel>
  {
   return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}
