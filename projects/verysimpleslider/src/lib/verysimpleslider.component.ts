import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'very-simple-slider',
  templateUrl: './very-simple-slider.html',
  styleUrls: ['./very-simple-slider.scss'],
})
export class VerysimplesliderComponent implements OnInit {

  @Input() items = [];
  private progressValue = 0;
  private progressInterval;
  private loopInterval;
  private currentSlide = 0;
  private slideDuration = 10000;

  constructor() { }

  ngOnInit() {
    this.customSlider_init();
  }

    //------------start slider logic----------//
    customSlider_init(){
      this.next();
      this.start();
    }
  
    start() {
      this.progressInterval = setInterval(()=>{
        this.progressValue = this.progressValue + 0.1;
      }, this.slideDuration / 1000);
  
      this.loopInterval = setInterval(()=>{
        this.next();
      }, this.slideDuration);
    }
  
    stop() {
        clearInterval(this.loopInterval);
        clearInterval(this.progressInterval);
    }
  
    prev() {
      this.progressValue = 0;
        this.currentSlide -- ;
        if (this.currentSlide < 1) {
            this.currentSlide = this.items.length;
        }
    }
  
    next() {
      this.progressValue = 0;
        this.currentSlide ++ ;
        if (this.currentSlide > this.items.length) {
          this.currentSlide = 1;
        }
    }
    //------------end slider logic----------//

}
