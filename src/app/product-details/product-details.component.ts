import { Component, Input } from '@angular/core';
import productData from '../test.json';
import { OurProducts } from '../interface/our-products';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products:Array<OurProducts>=productData;

  myProduct!:any;
  constructor(private activeRouter:ActivatedRoute){
     
  }

   ngOnInit(){
     const displayedProduct=this.activeRouter.snapshot.params['id'];
     this.myProduct=this.products.find((pro)=>pro.id==displayedProduct)
   }
  
}
