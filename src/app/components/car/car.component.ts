import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
        this.getCarByBrandId(params["brandId"]);
      }
      else{
        this.getCar();
      }
    })
  }
  getCar()
  {
    this.carService.getCar().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    
    })
  }
  getCarByBrandId(brandId:number)
  {
    this.carService.getCarByBrandId(brandId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

}
