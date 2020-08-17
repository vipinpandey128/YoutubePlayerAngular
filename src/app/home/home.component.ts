import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ytData:Product[] = [];
  showMyContainer: boolean = false;
   showShortDesciption = true
  visibleIndex = -1;
  currentSection = 'section1';
  products: Product[];
  // hello : "https://www.youtube.com/embed/c9F5kMUfFKk"
  safeSrc: SafeResourceUrl;
  events$;
  specialevents$;
  landing$

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  version = '...';
  public player;
  public ytEvent;

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
  
  constructor(private sanitizer: DomSanitizer, private productService: DataService) { 
    // this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.hello);
    this.events$ = productService.getEvents();
    this.specialevents$ =productService.getSpecialEvents()
    this.landing$ =productService.getAll();
    
    
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data=>{
      this.landing$ = data;
      this.ytData = data;
      console.log("youtube data", this.ytData);
    });
  }

  alterDescriptionText(e) {
    this.showShortDesciption = !this.showShortDesciption
 }



 onStateChange(event) {
  this.ytEvent = event.data;
}
savePlayer(player) {
  this.player = player;
}

playVideo() {
  this.player.playVideo();
}

pauseVideo() {
  this.player.pauseVideo();
}


}
