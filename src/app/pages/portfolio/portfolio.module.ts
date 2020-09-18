import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../core/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

import { PortfolioService } from './share/portfolio.service';
import { CarouselComponent } from './components/carousel/carousel.component'

  
@NgModule({
  declarations: [PortfolioComponent, CarouselComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    NgbModule
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
