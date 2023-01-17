import { Component, OnInit,AfterViewInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Butler } from '@services/butler.service';
import { DataApiService } from '@services/data-api.service'; 
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements AfterViewInit {
members$:any=[];
parts$:any=[];
  constructor(
    public _butler:Butler,
    public dataApiService: DataApiService,
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

public getParts(){
  this.dataApiService.getAllParts().subscribe(response=>{
      this.parts$=response;
    });
}
public getMembers(){
  this.dataApiService.getAllMembers().subscribe(response=>{
      this.members$=response;
    });
}

  ngAfterViewInit(): void {
    this.getMembers();
    this.getParts();
  }

}
