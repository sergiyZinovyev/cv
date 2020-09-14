import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { HomeService } from './share/home.service'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cv: Object;
  subCV: Subscription;

  constructor(private homeService: HomeService) { }
 
  ngOnInit(): void {
    this.subCV = this.homeService.cv.subscribe(data => {
      this.cv = data
    })
  }

  ngOnDestroy(): void {
    this.subCV.unsubscribe()
  }
}
