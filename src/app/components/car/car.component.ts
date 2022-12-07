import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
  dataLoaded = false;
  cars:CarDetails[]=[]; //cars details almamızın nedeni carID ve BrandId göstermek istemememiz..
  constructor(private carService:CarService){}
  ngOnInit(): void {
    this.getCar();
  }
  getCar()
  {
    this.carService.getCar().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    
    })
  }
}
