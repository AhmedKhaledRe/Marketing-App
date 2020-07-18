import { Component } from '@angular/core';
import { SubscripeService } from '../../shared/subscripe.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

  subscripFormSilver: FormGroup;
  subscripFormPlatinum: FormGroup;
  subscripFormGold: FormGroup;

  slideOptions = {
    dots: true,
    dotsEach: true,
    slideTransition: 'linear',
    loop: true,
    center: true,
    startPosition: 1,
    rewind: true,
    touchDrag: true,
    autoWidth: false,
    responsiveClass: true,
    callbacks: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1100: {
        items: 3
      }
    }
  };

  constructor(private subscripeService: SubscripeService) {
    this.subscripFormSilver = new FormGroup({value: new FormControl('silver')});
    this.subscripFormPlatinum = new FormGroup({value: new FormControl('platinum')});
    this.subscripFormGold = new FormGroup({value: new FormControl('gold')});
  }

  subscripGold() {
    this.subscripeService.priceSubscripe(this.subscripFormGold.value);
  }

  subscripPlatinum() {
    this.subscripeService.priceSubscripe(this.subscripFormPlatinum.value);
  }

  subscripSilver() {
    this.subscripeService.priceSubscripe(this.subscripFormSilver.value);
  }

}
