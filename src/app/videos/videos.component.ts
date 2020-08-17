import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})
export class VideosComponent implements OnInit {

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
  constructor() { }

  ngOnInit(): void {

  }
}
