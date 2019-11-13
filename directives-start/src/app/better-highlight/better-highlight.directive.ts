import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
/*    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'white');*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
/*    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'black');*/
    this.backgroundColor = this.defaultColor;
  }
}
