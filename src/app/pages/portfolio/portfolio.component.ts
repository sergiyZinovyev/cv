import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {IPortfolio} from './share/portfolio.interface';
import {PortfolioService} from './share/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
 
  portfolio:IPortfolio[]; 
  subPortfolio: Subscription;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.subPortfolio = this.portfolioService.portfolio.subscribe((data: IPortfolio[]) => {
      this.portfolio = data
      console.log('this.portfolio: ', this.portfolio);
    })
  }

  ngOnDestroy(): void{
    this.subPortfolio.unsubscribe();
  }






}
