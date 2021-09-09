import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root'})
export class UtilityService {

  showModal=false

  get(){
    return this.showModal
  }

  set(){
    this.showModal=true
  }

}