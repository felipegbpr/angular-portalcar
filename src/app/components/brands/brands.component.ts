import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands/brands.service';
import { Brand } from 'src/app/models/brand.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  listBrands: Brand[] = [];

  displayedColumns: string[] = ["id", "name", "country"];

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getBrands().subscribe(brands => {
      this.listBrands = brands
      console.log(brands);
    });
  }

}
