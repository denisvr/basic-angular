import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "http://localhost:3000/";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlServiceV1 + "products");
  }
}
