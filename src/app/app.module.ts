import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AllDataComponent } from './admin/all-data/all-data.component';
import { TestVideoComponent } from './test-video/test-video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [	
    AppComponent,
    ScrollSpyDirective,
    BsNavbarComponent,
    CarouselComponent,
    GalleryComponent,
    VideosComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
    AllDataComponent,
      TestVideoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'eventDetails', component: VideosComponent },
      { path: 'errorPage', component: NotFoundComponent },
      { path: 'ministry_admin', component: AdminComponent },
      { path: 'admin_Data/ministry_admin/:id', component: AdminComponent },
      { path: 'admin_Data', component: AllDataComponent },
      { path: 'testvideo', component: TestVideoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
