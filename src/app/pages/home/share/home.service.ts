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
    description: `My personal qualities: analytical intelligence, organizational skills, willingness and desire to constantly learn new things and develop in the field of information technology. 
      My hobbies: electronic music, art house films, reading classical literature, fitness classes. I am interested in new discoveries in science and technology`,
    education: [
      {
        organization: 'SkillUp IT Specialist Training Center',
        specialization: 'Angular',
        date: '2019'
      },
      {
        organization: 'SkillUp IT Specialist Training Center',
        specialization: 'Front-End',
        date: '2019'
      },
      {
        organization: 'SkillUp IT Specialist Training Center',
        specialization: 'Basic Web And SQL',
        date: '2018'
      },
      {
        organization: 'Lviv Polytechnic National University',
        specialization: 'Faculty of economics and management',
        date: '1997-2002'
      }
    ],
    experience: [
      {
        organization: 'Gal-Expo, JSC',
        specialization: 'Front-End Developer',
        date: '2019-Present',
        description: `My current job is to develop a visitor database (Angular 10 / Node.js / MySQL):
        - a base with all the necessary functionality;
        - application for registration for a specific event / exhibition (admin part, web form for the visitor with the possibility to register and receive an invitation);
        - an application for creating and managing mass mailings on a visitor base
        `
      },
      {
        organization: 'Gal-Expo, JSC',
        specialization: 'Head of the Department of Economics and Exhibition Technologies',
        date: '2004-2019',
        description: `Develop and support an Excel-based database for automatic document issuance, further client work and analysis.`
      },
      {
        organization: 'Synergy, LTD',
        specialization: 'Foreman',
        date: '2002-2004',
        description: 'Organization of sewing production from the beginning'
      }
    ],
    software: [
      'Visual Studio Code',
      'Sublime Text',
      'AWD IDE',
      'Git Bash',
      'Green Git Client',
      'Koala',
      'phpMyAdmin',
      'PuTTY',
      'photopea/photoshop'
    ],
    programmingLanguages: [
      {
        name: 'HTML/CSS ',
        level: 5,
        experience: 'studied on courses using in current job',
      },
      {
        name: 'JavaScript/TypeScript/RxJS',
        level: 5,
        experience: 'studied on courses using in current job',
      },
      {
        name: 'Bootstrap/Angular Material',
        level: 4,
        experience: 'studied on courses using in current job',
      },
      {
        name: 'MySQL',
        level: 3,
        experience: 'studied on courses using in current job',
      },
      {
        name: 'Angular2',
        level: 4,
        experience: 'studied on courses using in current job',
        projectLinks: [
          {
            repository: 'https://github.com/sergiyZinovyev/baza-client'
          },
          {
            repository: 'https://github.com/sergiyZinovyev/visitors',
            page: 'https://visitors.galexpo.com.ua'
          },
          {
            repository: 'https://github.com/sergiyZinovyev/todolist',
            page: 'https://mytodo-4b6d3.firebaseapp.com'
          },
        ]
      },
      {
        name: 'Node.js/Express',
        level: 3,
        experience: 'Using in current job',
        projectLinks: [
          {
            repository: 'https://github.com/sergiyZinovyev/baza-api',
          }
        ]
      },
    ]

  }

  cv: BehaviorSubject<Object> = new BehaviorSubject(this._cv);

  constructor() { }
}
