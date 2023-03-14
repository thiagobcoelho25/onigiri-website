import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerNewsComponent } from './components/ticker-news/ticker-news.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { SectionsThemeComponent } from './components/sections-theme/sections-theme.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerNewsComponent,
    CarouselSliderComponent,
    SectionsThemeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
