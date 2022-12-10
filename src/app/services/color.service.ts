import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/colors/getall";
  getColor():Observable<ListResponseModel<Color>>
  {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
