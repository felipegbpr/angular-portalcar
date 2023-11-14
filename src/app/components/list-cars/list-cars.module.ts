import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCarsComponent } from './list-cars.component';
import { ListCarsRoutingModule } from './list-cars.routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ListCarsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ListCarsRoutingModule
  ]
})
export class ListCarsModule { }
