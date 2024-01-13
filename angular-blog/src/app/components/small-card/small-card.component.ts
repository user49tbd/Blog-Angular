import { Component, OnInit,Input} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  imgwidth: number = window.innerWidth/4+20;
  @Input()
  cardimg:string='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
  @Input()
  cardTitle:string='';
  @Input()
  cardDesc:string='';
  @Input()
  Id:string='0';
  constructor() { }

  ngOnInit(): void {
  }

}
