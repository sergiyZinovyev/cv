import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { ICv } from './cv.interface';

@Injectable()
export class HomeService {

  private _cv: ICv = {
    title: {
      name: 'Sergiy Zinovyev',
      profession: 'Front-End Developer',
      specialization: 'Angular2/Node.js/MySQL'
    },
    contacts: {
      phone: '+380673130512',
      email: 'thrion1@gmail.com',
      githab: 'https://github.com/sergiyZinovyev',
      location: 'Lviv'
    },
    description: 'My personal qualities: analytical intelligence, organizational skills, willingness and desire to constantly learn new things and develop in the field of information technology.\nMy hobbies: electronic music, art house films, reading classical literature, fitness classes. I am interested in new discoveries in science and technology'
  }

  cv: BehaviorSubject<Object> = new BehaviorSubject(this._cv);

  constructor() { }
}
