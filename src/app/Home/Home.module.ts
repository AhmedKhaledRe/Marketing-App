import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SubscripeService } from './shared/subscripe.service';
import { HomeListComponent } from './Home-List/Home-List.component';
import { HomeComponent } from './Home.component';

import { CarouselComponent } from './Home-List/carousel/carousel.component';
import { OfferComponent } from './Home-List/offer/offer.component';
import { WhoWeAreComponent } from './Home-List/who-we-are/who-we-are.component';
import { PricingComponent } from './Home-List/pricing/pricing.component';
import { SubscripeNewsComponent } from './Home-List/subscripe-news/subscripe-news.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeListComponent,
    HomeComponent,
    CarouselComponent,
    OfferComponent,
    WhoWeAreComponent,
    PricingComponent,
    SubscripeNewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SubscripeService,
  ]
})
export class HomeModule {}
