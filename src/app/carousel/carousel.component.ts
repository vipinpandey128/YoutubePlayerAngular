import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Product } from '../modals/data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit {
  
 currentSection = 'section1';
   landing$;
   startPage : Number;
   paginationLimit:Number; 
   title:String;
   list:any;


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
  constructor(productService: DataService) {
    this.landing$ =productService.getAll();
    this.startPage = 0;
    this.paginationLimit = 3;
   }

  ngOnInit(): void {

  }

  showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 3;
   }

}
