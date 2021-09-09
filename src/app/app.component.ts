import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { faExpand } from '@fortawesome/free-solid-svg-icons';

import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { UtilityService } from './utility.service';

//  import * as data from './data.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  faExpand= faExpand;
  faCompress= faCompress;

  products: any = [];

  showModal=false;

  

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) {

   this.showModal= utilityService.get()

  }
  toggle_modal(){
    this.showModal = !this.showModal
  }
  ngOnInit() {
    // console.log(' erica');
    // this.httpClient.get('assets/data.json').subscribe(data => {
    //   console.log(data);
    //   console.log('erica');
    //   this.products = data;
    // });
  }

  ngAfterViewInit(){
    
  }
}
