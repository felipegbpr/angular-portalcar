import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCarsComponent } from './list-cars.component';


const listCarsRoutes = [

  { path: '', component: ListCarsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(listCarsRoutes)],
  exports: [RouterModule]
})

export class ListCarsRoutingModule {}
