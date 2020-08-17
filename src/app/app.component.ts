import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'churchLatest';

  id = 'GtstGUxinOQ';
  playerVars = {
    cc_lang_pref: 'en'
  };
  version = '...';
  private player;
  private ytEvent;

  constructor() {
    // this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace('^', '');
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

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
}
