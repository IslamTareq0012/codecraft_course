import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: "[ccCardHover]"
})
export class CardHoverDirective {

    @HostBinding('class.border-dark') private ishovering: boolean;
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    @Input('ccCardHover') config: any = {
        querySelector: '.card-text'
    };
    @HostListener('mouseover') onMouseOver() {
        let part = this.el.nativeElement.querySelector(this.config.querySelector)
        this.renderer.setElementStyle(part, 'display', 'block');
        this.ishovering = true;
    }
    @HostListener('mouseout') onMouseOut() {
        let part = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(part, 'display', 'none');
        this.ishovering = false;
    }
}