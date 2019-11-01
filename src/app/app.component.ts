import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Very Simple Slider Demo Page';
  items = [
    {id:1,title:"SLIDE1 TITLE",subtitle:"Slide 1 subtitle here",image:"./assets/images/1.jpg"},
    {id:2,title:"SLIDE2 TITLE",subtitle:"Slide 2 subtitle here",image:"./assets/images/2.jpg"},
    {id:3,title:"SLIDE3 TITLE",subtitle:"Slide 3 subtitle here",image:"./assets/images/3.jpg"}
  ];

}

