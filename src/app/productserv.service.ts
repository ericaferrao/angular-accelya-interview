import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn:'root'})
export class ProductservService {

  products: any = [];

  constructor(private httpClient: HttpClient) {}

  getProduct() {
   
    return this.httpClient.get('assets/data.json')
  }

  

}