import { Component, OnInit } from '@angular/core';
import { ListCarsService } from '../../services/list-cars/list-cars.service';
import { Car } from 'src/app/models/car.model';


@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  listCars: Car[] = [];
  
  constructor(private listCarsService: ListCarsService) { }

  ngOnInit(): void {
    this.listCarsService.getListCars().subscribe(cars => {
      this.listCars = cars
      console.log(cars);
    });
  }

}
