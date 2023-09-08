import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OurProducts } from '../interface/our-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Cart=new BehaviorSubject<Array<any>>([]);

  constructor(private http:HttpClient) { }
  

  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }


  getProductDetails(id:number|string): Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  setCart(cart:any){
        // this.Cart.next(cart);

        this.Cart.next([...this.Cart.value, cart]);
  }

  getCart(){
    return this.Cart.asObservable();
  }

  
}


