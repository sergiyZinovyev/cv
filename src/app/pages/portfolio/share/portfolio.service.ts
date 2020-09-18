import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPortfolio} from './portfolio.interface'

@Injectable()
export class PortfolioService {

  _portfolio:IPortfolio[] = [
    {
      name: 'Visitors',
      link: 'https://visitors.galexpo.com.ua/',
      images: [
        {'image': './assets/img/visitor_1.png'}, 
        {'image': './assets/img/visitor_2.png'},
        {'image': './assets/img/visitor_3.png'}, 
        {'image': './assets/img/visitor_4.png'}, 
      ]
    },
    {
      name: 'Data Base',
      images: [
        {'image': './assets/img/db0.png'}, 
        {'image': './assets/img/db1.png'},
        {'image': './assets/img/db2.png'}, 
      ]
    },
    {
      name: 'TO DO IT',
      link: 'https://mytodo-4b6d3.firebaseapp.com',
      images: [
        {'image': './assets/img/todo0.png'}, 
        {'image': './assets/img/todo1.png'},
        {'image': './assets/img/todo2.png'}, 
        {'image': './assets/img/todo3.png'}, 
      ]
    },
    {
      name: 'Hollysblog',
      link: 'https://hollysblog.000webhostapp.com',
      images: [
        {'image': './assets/img/blog0.png'}, 
        {'image': './assets/img/blog1.png'},
        {'image': './assets/img/blog2.png'}, 
        {'image': './assets/img/blog3.png'}, 
      ]
    },
  ];

  portfolio: BehaviorSubject<IPortfolio[]> = new BehaviorSubject(this._portfolio);

  constructor() { }
}
