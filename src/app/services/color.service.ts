import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44396/api/colors/getall";
  getColor():Observable<ColorResponseModel>
  {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
