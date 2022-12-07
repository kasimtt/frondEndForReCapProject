import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { brandResponseModel } from '../models/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/brands/getall";
 
  getBrand():Observable<brandResponseModel>
  {
   return this.httpClient.get<brandResponseModel>(this.apiUrl)
  }
}
