import { Directive, HostListener, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
  @Input()
  private date: string;
  private paragraph;
  constructor(private el: ElementRef, private render: Renderer2) {
    this.paragraph = this.render.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate:  Event) {
    this.paragraph.innerHTML = this.date;
    this.render.appendChild(this.el.nativeElement, this.paragraph);

  }
  @HostListener('mouseleave')
  mouseleave(eventDate:  Event) {
    this.render.removeChild(this.el.nativeElement, this.paragraph);
  }
}
