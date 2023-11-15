import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesOfferedComponent } from './components/services-offered/services-offered.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'list-cars', component: ListCarsComponent },
  {
    path: 'list-cars',
    loadChildren: () => import('./components/list-cars/list-cars.module').then(m => m.ListCarsModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./components/brands/brands.module').then(m => m.BrandsModule)
  },
  // { path: 'brands', component: BrandsComponent },
  { path: 'services-offered', component: ServicesOfferedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
