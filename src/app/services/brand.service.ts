import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/brands/getall";
 
  getBrand():Observable<ListResponseModel<Brand>>
  {
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
