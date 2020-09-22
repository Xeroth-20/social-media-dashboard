import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[jxThemeMode]'
})
export class ThemeModeDirective implements OnInit{

    constructor(
        private el: ElementRef<HTMLDivElement>
    ) { }

    ngOnInit(): void {
        this.el.nativeElement.dataset.theme = 'dark';
    }

    @Input('jxThemeMode')
    set jxThemeMode(theme: string) {
        this.el.nativeElement.dataset.theme = theme;
    }
}
