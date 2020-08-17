import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/data';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  items: Product[] = [];
  products: Product[];
  landing$;
  events$;
  subscription: Subscription;

  constructor(private productService: DataService) { 
    this.landing$ =productService.getAll();
    this.events$ = productService.getEvents();
    // this.subscription = this.productService.getAll()
    // .subscribe((products: Product[]) => {
    //   this.products = products;
      // this.initializeTable(products); // Initializing data-table here
    // });
  }

  ngOnInit() {
  }

}
