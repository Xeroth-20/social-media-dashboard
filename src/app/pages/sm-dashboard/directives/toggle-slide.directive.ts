import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[jxToggleSlide]'
})
export class ToggleSlideDirective {

    constructor(
        private el: ElementRef<HTMLLabelElement>
    ) { }

    @HostListener('click')
    private slideToggle(): void {
        this.el.nativeElement.classList.toggle('slide');
    }
}
