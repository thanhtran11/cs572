import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {

  @Input() appIsVisible: boolean;

  constructor(private elem:ElementRef, private render:Renderer2) {
    
   }

   ngOnInit(){
      this.render.setStyle(this.elem.nativeElement, "display", this.appIsVisible ? "block": "none");
   }

}
