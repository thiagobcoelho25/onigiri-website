import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerNewsComponent } from './components/ticker-news/ticker-news.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { SectionsThemeComponent } from './components/sections-theme/sections-theme.component';
import { CategoryComponent } from './components/category/category.component';
import { LastNewsComponent } from './components/last-news/last-news.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoNewsComponent } from './pages/info-news/info-news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerNewsComponent,
    CarouselSliderComponent,
    SectionsThemeComponent,
    CategoryComponent,
    LastNewsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    InfoNewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
