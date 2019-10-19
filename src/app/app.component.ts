import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Very Simple Slider Demo Page';
slides = [
  {id:0,name:"Slide1"},
  {id:1,name:"Slide2"},
  {id:2,name:"Slide3"}
]

}

