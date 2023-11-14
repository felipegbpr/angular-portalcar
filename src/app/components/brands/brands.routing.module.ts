import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandsComponent } from './brands.component';

const brandsRoutes = [

  { path: '', component: BrandsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(brandsRoutes)],
  exports: [RouterModule]
})

export class BrandsRoutingModule {}
