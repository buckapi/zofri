import { Component, OnInit } from '@angular/core';
import { Butler } from '@services/butler.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
  public _butler:Butler,

    ) { }

  ngOnInit(): void {
  }

}
