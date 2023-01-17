import { Component, OnInit } from '@angular/core';
import { Butler } from '@services/butler.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
  public _butler:Butler,

    ) { }
 config: SwiperOptions = {

    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    spaceBetween: 5,
    navigation: false
  };  
  ngOnInit(): void {
  }

}
