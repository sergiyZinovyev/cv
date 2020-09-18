import { Component, OnInit, Input} from '@angular/core';
import {ISkill} from '../../share/cv.interface'
 
@Component({
  selector: 'app-prog-lang',
  templateUrl: './prog-lang.component.html',
  styleUrls: ['./prog-lang.component.css']
})
export class ProgLangComponent implements OnInit {

  @Input()languages: ISkill;

  constructor() { }

  ngOnInit(): void {
  }

  levelToStarArr(level: number): Array<boolean>{
    let starArr: Array<boolean> = new Array(5);
    for (let index = 0; index < starArr.length; index++) {
      if(index<level) starArr[index] = true
    }
    return starArr
  }

}
