import { Component, Input } from '@angular/core';
import {OurProducts} from '../interface/our-products';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item !:OurProducts;


  constructor(private router:Router){

  }
  showDetails(id:number){
    console.log(id);
    this.router.navigate(['product-details',id]);

  }
  AddToCart(id:number){
    console.log(id);
    this.router.navigate(['cart',id]);
  }
}
