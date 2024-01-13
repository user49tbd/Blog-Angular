import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from 'src/app/data/dataTest'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  width2: number = window.innerWidth/2;
  photocover:string='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
  contentTitle:string='';
  contentDesc:string='';
  private idValue:string | null = "0";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("bolder")
    this.route.paramMap.subscribe(value => this.idValue = value.get("id"));
    this.setValues(this.idValue);
  }
  setValues(id:string | null){
    const val = data.filter(article => article.id == id)[0]
      this.photocover =  val.photo;
      this.contentTitle = val.title;
      this.contentDesc = val.desc;
  }
}
