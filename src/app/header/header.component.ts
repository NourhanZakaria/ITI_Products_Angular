import { Component } from '@angular/core';
import { CounterCardService } from '../service/counter-card.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


   counter:number=0;
   constructor(private counterService:CounterCardService) {}

   ngOnInit(){
    this.counterService.getCounter().subscribe(
      (val:any)=>this.counter=val
    );
   }
}
