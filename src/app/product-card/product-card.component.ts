import { Component, EventEmitter, Input, Output } from '@angular/core';
import {OurProducts} from '../interface/our-products';
import {ActivatedRoute, Router} from '@angular/router';
import { CounterCardService } from '../service/counter-card.service';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item !:OurProducts;

  @Output() addItemFromChild = new EventEmitter();
  
  
  product:Array<OurProducts>=[];

  products:Array<any>=[];

   counter:number=0;
  items:any;

  addItemToCart(item:OurProducts) {
    this.addItemFromChild.emit(item);
  }

  
  constructor(private router:Router,private counterService:CounterCardService,private productService: ProductService,private activeRouter:ActivatedRoute){
 
    this.productService.getCart().subscribe(
      {
        next:(res)=>{
         this.items=res;
      }
      })

   
    
    
  }


  ngOnInit(){
    this.counterService.getCounter().subscribe((val:any)=>this.counter=val);
  }
  showDetails(id:number){
    
    this.router.navigate(['product-details',id]);

  }
  AddToCart(id:number){
   
    
    
    this.productService.getProductDetails(id).subscribe({
      next:(res)=>{
  
      let findItem=this.items.find((ele:any)=>ele.id==res.id); 
    
       
      if(findItem)
      {
         findItem.quantity=findItem.quantity+1;
         findItem.price=findItem.price*findItem.quantity;
      }
      else{
       res.quantity=1;      
       this.counterService.setCounter(++this.counter);
       this.productService.setCart(res);
   
      }
       
    
     }
    })

 
   }

   

   


   
}



