import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'very-simple-slider',
  templateUrl: './very-simple-slider.html',
  styleUrls: ['./very-simple-slider.scss','./animate.css'],
})
export class VerysimplesliderComponent implements OnInit {

  @Input() items;
  private progressValue = 0;
  private progressInterval;
  private loopInterval;
  currentSlide = 0;
  slideAnimName;
  slideAnimOppName;
  @Input() slideDuration = 100000;
  @Input() animType;
  @Input() animDirection;
  constructor() { 

  }

  ngOnInit() {
    if(this.animType=="slide"){
      if(this.animDirection=="right"){
        this.slideAnimName = "slideInLeft";
        this.slideAnimOppName = "slideOutRight";
      }else{
        this.slideAnimName = "slideInRight";
        this.slideAnimOppName = "slideOutLeft";
      }
    }else if(this.animType=="fade"){
      this.slideAnimName = "fadeIn";
      this.slideAnimOppName = "fadeOut";
    }
    this.customSlider_init();
  }

    //------------start slider logic----------//
    customSlider_init(){
      this.start();
      this.next();
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

        //reverse slide anim
        if(this.animDirection=="right"){
          this.slideAnimName = "slideInRight";
          this.slideAnimOppName = "slideOutLeft";
        }else{
          this.slideAnimName = "slideInLeft";
          this.slideAnimOppName = "slideOutRight";
        }
  
        this.currentSlide -- ;
        if (this.currentSlide < 1) {
            this.currentSlide = this.items.length;
        }

        //restart time
        clearInterval(this.loopInterval);
        this.loopInterval = setInterval(()=>{
          //revert back to normal animation
          if(this.animDirection=="right"){
            this.slideAnimName = "slideInLeft";
            this.slideAnimOppName = "slideOutRight";
          }else{
            this.slideAnimName = "slideInRight";
            this.slideAnimOppName = "slideOutLeft";
          }
          this.next();
        }, this.slideDuration);


    }
  
    next() {
      this.progressValue = 0;

      //restart time
      clearInterval(this.loopInterval);
      this.loopInterval = setInterval(()=>{
        this.next();
      }, this.slideDuration);

        this.currentSlide ++ ;
        if (this.currentSlide > this.items.length) {
          this.currentSlide = 1;
        }
    }
    //------------end slider logic----------//

}
