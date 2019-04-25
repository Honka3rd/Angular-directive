import { Directive,HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatterDirective {
  @Input('appInputFormatter') format;

  constructor(private el:ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('on focus');
  }

  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;
    if(this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else if(this.format === 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
  }
}
