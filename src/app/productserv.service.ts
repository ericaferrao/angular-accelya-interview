import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn:'root'})
export class ProductservService {

  products: any = [];

  constructor(private httpClient: HttpClient) {}

  getProduct() {
   
    return this.httpClient.get('assets/data.json')
  }

  getsearchedProductName(){
    // return data.filter(e => e.id.includes(s) || e.taskname.includes(s))
    // .sort((a,b) => a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 :0);
  }

  

}