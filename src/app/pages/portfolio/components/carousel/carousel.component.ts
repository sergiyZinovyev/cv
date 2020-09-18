import { Component, Input, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {IImage} from '../../share/portfolio.interface'
 
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() slides: IImage[];

  constructor() { }

  ngOnInit(): void {
  }

}
