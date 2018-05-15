import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicesService } from './services.service';
import { PostsComponent } from './components/posts/posts.component';
import { ListComponent } from './list/list.component';
import { CenterBoxComponent } from './center-box/center-box.component';
import { LeftBoxComponent } from './left-box/left-box.component';
import { RightBoxComponent } from './right-box/right-box.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ListComponent,
    CenterBoxComponent,
    LeftBoxComponent,
    RightBoxComponent,
    DashboardComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
