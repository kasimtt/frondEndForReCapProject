import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = "https://localhost:44396/api/customers/getcustomerdetails";
  getCustomer():Observable<ListResponseModel<Customer>>
  {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
