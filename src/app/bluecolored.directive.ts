import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bluecolored]'
})
export class BluecoloredDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.style.color='blue';
  }

  @HostListener('click') clickEvent(){
    console.log('click');
  }
  @HostListener('mouseenter') mouseenterEvent(){
    console.log('mouseenter');
  }
  @HostListener('mouseleave') mouseleaveEvent(){
    console.log('mouseleave');
  }
  @HostListener('mousemove') mousemoveEvent(){
    console.log('mousemove');
  }

}

