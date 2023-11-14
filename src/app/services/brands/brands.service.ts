import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map } from 'rxjs';
import { Brand } from 'src/app/models/brand.model';

@Injectable({
  providedIn: 'root'
})

export class BrandsService {
  baseUrl = "http://localhost:3000/brands";

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

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
