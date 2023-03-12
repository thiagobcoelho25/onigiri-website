import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerNewsComponent } from './components/ticker-news/ticker-news.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerNewsComponent,
    CarouselSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
