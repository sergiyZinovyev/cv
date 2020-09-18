import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './share/home.service';
import { ICv } from './share/cv.interface'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  cv: ICv;
  subCV: Subscription;

  constructor(private homeService: HomeService) { }
 
  ngOnInit(): void {
    this.subCV = this.homeService.cv.subscribe((data: ICv) => {
      this.cv = data
      console.log('this.cv: ', this.cv);
    })
  }

  ngOnDestroy(): void {
    this.subCV.unsubscribe()
  }
}
