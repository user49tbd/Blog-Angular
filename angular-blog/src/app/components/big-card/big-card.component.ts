import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  width2: number = window.innerWidth/2-20;
  @Input() 
  photoCover:string='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
  @Input() 
  cardTitle:string=''; 
  @Input() 
  cardDescription:string='';
  @Input()
  Id:string='0';
  constructor() { }

  ngOnInit(): void {
  }
}

