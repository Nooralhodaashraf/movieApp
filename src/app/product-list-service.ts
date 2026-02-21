import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private readonly httpClient = inject(HttpClient);
  getProducts(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }
}
