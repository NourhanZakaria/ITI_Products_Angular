import { Component, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { OurProducts } from '../interface/our-products';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CounterCardService } from '../service/counter-card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
 

  products:Array<any>=[];
  counter:number=0;
  total:number=0;

  constructor(private productService: ProductService,private counterService: CounterCardService,private activeRouter:ActivatedRoute,private router:Router) {}


  ngOnInit() {


    this.productService.getCart().subscribe(
      (val)=> this.products=val 
    )
   
    for(let obj in this.products){
       this.total+=this.products[obj].price
    }
    

   }

  

  removeItem(i:any){
    if (i !== -1) {
      this.products.splice(i, 1);
    }
  }

  increaseQuantity(id:any){
    
  this.productService.getProductDetails(id).subscribe({
      next:(res)=>{
        let findItem=this.products.find((ele:any)=>ele.id==res.id); 
        if(findItem)
        {
           findItem.quantity=findItem.quantity+1;
           
        }

      }});
    
    
  }
  decreaseQuantity(id:number){
    this.productService.getProductDetails(id).subscribe({
      next:(res)=>{
        let findItem=this.products.find((ele:any)=>ele.id==res.id); 
        if(findItem)
        {
          if(findItem.quantity>1)
           findItem.quantity=findItem.quantity-1;
           
        }

      }});
    
    
  }
}

