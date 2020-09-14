import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Icv } from './cv.interface'

@Injectable()
export class HomeService {

  private _cv: Icv = {
    title: {
      name: '',
      profession: '',
      specialization: ''
    },
    contacts: {
      phone: '',
      email: '',
      githab: '',
      location: 'Lviv'
    }
  }

  cv: BehaviorSubject<Object> = new BehaviorSubject(this._cv);

  constructor() { }
}
