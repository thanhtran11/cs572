import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private ele:ElementRef, private r:Renderer2) { }

  @HostListener('click') makeBigger(){    
    let curSizeStyle = getComputedStyle(this.ele.nativeElement).fontSize;    
    let curSize = parseFloat(curSizeStyle) +2;    
    this.r.setStyle(this.ele.nativeElement, "font-size", curSize + "px");
  }

}
