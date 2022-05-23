import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

import Swiper from 'swiper';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      // mousewheel: true,
      // keyboard: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {
  }

}
