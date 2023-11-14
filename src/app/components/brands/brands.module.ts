import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsComponent } from './brands.component';
import { BrandsRoutingModule } from './brands.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    BrandsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
