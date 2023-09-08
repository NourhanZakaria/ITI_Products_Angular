import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterCardService {

  private counter=new BehaviorSubject(0)
  constructor() { }

  getCounter(){
        return this.counter.asObservable()
      
  }

  setCounter(counterVal:number)
  { 
    this.counter.next(counterVal);
   
  }

  
}
