import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[colorContainer]',
  standalone: true
})
export class ColorDirective {

  constructor(private el: ElementRef ) {
this.el.nativeElement.style.backgroundColor = 'blue';
   }

   @HostListener('click') onClick()
{
  this.el.nativeElement.style.backgroundColor = 'green';
}
@HostListener('mouseleave') mouseentra()
{
  this.el.nativeElement.style.backgroundColor = 'yellow';
}
@HostListener('mouseenter') enter()
{
  this.el.nativeElement.style.backgroundColor = 'red';
}
}
