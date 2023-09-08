import { Component, Input } from '@angular/core';
import productData from '../test.json';
import { OurProducts } from '../interface/our-products';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {



 

  product:any;
  
  constructor(private productService: ProductService,private activeRouter:ActivatedRoute) {}

  ngOnInit() {
  const displayedProduct=this.activeRouter.snapshot.params['id'];
    console.log(displayedProduct);
    this.productService.getProductDetails(displayedProduct).subscribe({
      next: (res) => {
        // console.log(res);
       return this.product = res;
        
      },
      error: (err) => console.log(err),
      complete: () => console.log('products returned successfully'),
    });


  }




 

  
  
}
