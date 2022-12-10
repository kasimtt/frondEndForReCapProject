import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/"
 
  getCar():Observable<ListResponseModel<CarDetails>>
  {
    let newPath=this.apiUrl+"cars/getcardetails"
   return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>>
  {
    let newPath = this.apiUrl+ "cars/getcardetailsbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
}
