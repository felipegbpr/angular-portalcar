import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map } from 'rxjs';
import { Car } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root'
})

export class ListCarsService {
  baseUrl = "http://localhost:3000/cars";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  getListCars(): Observable<Car[]> {
    return this.http.get<Car>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
