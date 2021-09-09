import { Component, OnInit } from '@angular/core';
import {ProductservService} from '../productserv.service';
import {UtilityService} from '../utility.service';

// import { FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';

import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// https://origin.fontawesome.com/v5/cheatsheet
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 

  products: any = [];
  faCoffee = faCoffee;
  faList = faList;
  faSync = faSync;
  faTable =faTable;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faCompress= faCompress;
  mymodel

  constructor(public product_serv:ProductservService, public  UtilityService:UtilityService) { }

  ngOnInit() {

    this.product_serv.getProduct().subscribe(data => {

     
      this.products = data;
      
 

      
    });

  }

  sortbyIDasc=true

  sortbyID(){

    this.sortbyIDasc=!this.sortbyIDasc

    if(this.sortbyIDasc){
      this.products=this.products.sort(function(a, b){
        return a.id - b.id;
    });
  
    }else{
      this.products=this.products.sort(function(a, b){
        return b.id - a.id;
    });
    }

   
  }

  sortbyDiscountasc=true
  sortbyDiscount(){

    this.sortbyDiscountasc=!this.sortbyDiscountasc

    if(this.sortbyDiscountasc){
      this.products=this.products.sort(function(a, b){
        return a.discountPrice - b.discountPrice;
    });
  
    }else{
      this.products=this.products.sort(function(a, b){
        return b.discountPrice - a.discountPrice;
    });
    }

   
  }

  sortbyActualPriceasc=true
  sortbyActualPrice(){

    this.sortbyActualPriceasc=!this.sortbyActualPriceasc

    if(this.sortbyActualPriceasc){
      this.products=this.products.sort(function(a, b){
        return a.actualPrice - b.actualPrice;
    });
  
    }else{
      this.products=this.products.sort(function(a, b){
        return b.actualPrice - a.actualPrice;
    });
    }

   
  }

  sortbyStockasc=true
  sortbyStock(){

    this.sortbyStockasc=!this.sortbyStockasc

    if(this.sortbyStockasc){
      this.products=this.products.sort(function(a, b){
        return a.stockAvailable - b.stockAvailable;
    });
  
    }else{
      this.products=this.products.sort(function(a, b){
        return b.stockAvailable - a.stockAvailable;
    });
    }

   
  }

  productNameasc=true
  sortbyproductName(){

    this.productNameasc=!this.productNameasc

    if(this.productNameasc){
      this.products=this.products.sort(function(a, b){
        return (( a.productName < b.productName) ? -1 : ((a.productName > b.productName) ? 1 : 0));
         
        
    });
  
    }else{
      this.products=this.products.sort(function(a, b){
        return ((a.productName > b.productName) ? -1 : (( a.productName < b.productNam) ? 1 : 0));

      
    });
    }

   
  }


  refresh(){
    this.mymodel=""
    this.productNameasc =true;
    this.sortbyStockasc=true;
    this.sortbyActualPriceasc=true;
    this.sortbyDiscountasc=true;
    this.sortbyIDasc=true
    this.product_serv.getProduct().subscribe(data => {
      this.products = data;
    })
  }

  valuechange(newValue) {
    this.mymodel = newValue;
      this.product_serv.getProduct().subscribe((data:any) => {

        if(newValue.length>0){
       
        this.products =  data.filter(e => e.productName.toLowerCase( ).includes(newValue.toLowerCase( ))).sort(function(a, b){
         
            return a.id - b.id;

      });
        }else{
          this.products = data
        }
      });
    
   
  }

}