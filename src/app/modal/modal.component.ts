import { Component, OnInit } from '@angular/core';
import {ProductservService} from '../productserv.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  products: any = [];

  constructor(public product_serv:ProductservService) { }

  ngOnInit() {

    this.product_serv.getProduct().subscribe(data => {

      console.log(data)
     
      this.products = data;
      
    console.log(this.products)

      
    });;

  }

}