import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Services */
import { ThemeModeService } from './theme-mode.service';

/* Directives */
import { ThemeModeDirective } from './theme-mode.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ThemeModeDirective
    ],
    providers: [
        ThemeModeService
    ],
    exports: [
        ThemeModeDirective
    ]
})
export class SharedModule { }