import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../modals/data';

@Component({
  selector: 'app-test-video',
  templateUrl: './test-video.component.html',
  styleUrls: ['./test-video.component.css']
})
export class TestVideoComponent implements OnInit {
  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  version = '...';
  public player;
  public ytEvent;
  private service;
  ytData:Product[] = [];

  constructor(private productService: DataService) {
    this.service = productService;
    //this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace('^', '');
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

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>{
      this.ytData = data;
      console.log("youtube data", this.ytData);
    });
  }
}
