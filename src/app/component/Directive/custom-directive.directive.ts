import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[CustomDirective]',
})
export class CustomDirectiveDirective implements OnChanges {
  @Input() property1: string = 'aqua';
  @Input('CustomDirective') property2: string = 'red';
  constructor(public elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = '3px solid blue';
  }
  ngOnChanges():void{
    this.elementRef.nativeElement.style.border = `3px solid ${this.property2}`;

  }
  //method dercorator
  @HostListener('mouseover') changeborder() {
    this.elementRef.nativeElement.style.borderRadius = '30px';
    this.elementRef.nativeElement.style.opacity = '0.6';
    // this.elementRef.nativeElement.style.opac = '3px solid green';
  }

  @HostListener('mouseout') changeborder2() {
    this.elementRef.nativeElement.style.border = `3px solid ${this.property1}`;
  }

  // @HostListener('click') changeborder3() {
  //   this.elementRef.nativeElement.style.border = `3px solid ${this.property2}`;
  // }
}
