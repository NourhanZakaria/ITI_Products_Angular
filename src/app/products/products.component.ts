import { Component } from '@angular/core';
import {OurProducts} from '../interface/our-products';
import productData from '../test.json';

// import productData from '../assets/pro.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    

    products:Array<OurProducts>=productData;

   



    
}
