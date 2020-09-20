import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../core/material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HomeService } from './share/home.service';
import { BiographyComponent } from './components/biography/biography.component';
import { ProgLangComponent } from './components/prog-lang/prog-lang.component';

    
@NgModule({
  declarations: [HomeComponent, BiographyComponent, ProgLangComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
