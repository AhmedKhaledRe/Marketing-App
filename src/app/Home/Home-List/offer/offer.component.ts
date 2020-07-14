import { Component, OnInit } from '@angular/core';
import { SubscripeService } from '../../shared/subscripe.service';
import { Offer } from '../../shared/offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: Offer[] = [];

  constructor(private subscripeService: SubscripeService) {
   }

  ngOnInit() {

    const offerObservable = this.subscripeService.getOffers();
    offerObservable.subscribe(
      (offers: Offer[]) => {
        this.offers = offers;
      });
  }

}
