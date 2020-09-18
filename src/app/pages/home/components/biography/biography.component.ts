import { Component, Input, OnInit } from '@angular/core';
import {IExperience} from '../../share/cv.interface'
 
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  @Input()experience: IExperience[];

  constructor() { }

  ngOnInit(): void {
  }

}
