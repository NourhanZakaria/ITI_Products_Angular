import { Component } from '@angular/core';
import { OurProducts } from '../interface/our-products';
import productData from '../test.json';
import { ProductService } from '../service/product.service';

// import productData from '../assets/pro.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // products:Array<OurProducts>=productData;

  products:any;

  constructor(private productService: ProductService) {
    // console.log(this.products);
  }

  ngOnInit() {

    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => console.log(err),
      complete: () => console.log('products returned successfully'),
    });
      
    }





  
}
