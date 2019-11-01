# Verysimpleslider
Very simple slider is an Angular 2+ plugin that creates a simple slider
See [Demo](https://stackblitz.com/edit/verysimpleslider) page.

## Versions

| Angular| Very Simple Slider|
| ------|:------:| 
| >=5.x.x  | v0.0.2 |

## Getting started
### Step 1: Install `VerySimpleSlider`:

#### NPM
```shell
npm i --save verysimpleslider
```

### Step 2: Import the VerysimplesliderModule:
```js
import { VerysimplesliderModule } from 'verysimpleslider';

@NgModule({
  declarations: [AppComponent],
  imports: [VerysimplesliderModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 3: Use in your component:
```js

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <very-simple-slider [items]="slides"></very-simple-slider>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Very Simple Slider Demo Page';
  items = [
    {id:1,title:"SLIDE1 TITLE",subtitle:"Slide 1 subtitle here",image:"https://raw.githubusercontent.com/rabiee3/verysimpleslider/master/src/assets/images/1.jpg"},
    {id:2,title:"SLIDE2 TITLE",subtitle:"Slide 2 subtitle here",image:"https://raw.githubusercontent.com/rabiee3/verysimpleslider/master/src/assets/images/2.jpg"},
    {id:3,title:"SLIDE3 TITLE",subtitle:"Slide 3 subtitle here",image:"https://raw.githubusercontent.com/rabiee3/verysimpleslider/master/src/assets/images/3.jpg"}
  ];

}
```