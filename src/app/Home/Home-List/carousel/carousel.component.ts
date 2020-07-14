import { Component, OnInit } from '@angular/core';
import { SubscripeService } from '../../shared/subscripe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  subscripForm: FormGroup;

  constructor(private subscripeService: SubscripeService) {
  }

  ngOnInit() {
  }

  subscrip() {
    this.subscripeService.priceSubscripe(this.subscripForm.value).subscribe(
      () => {
        console.log(this.subscripForm.value);
      });
  }
}
