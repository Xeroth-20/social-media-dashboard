import { Component } from '@angular/core';

/* Services */
import { ThemeModeService } from './shared/theme-mode.service';

@Component({
    selector: 'jx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public currentTheme: string = 'dark';

    constructor(
        private _themeMode: ThemeModeService
    ) {
        this._themeMode.themeModeState.subscribe(
            (theme) => {
                this.currentTheme = theme == this.currentTheme ? 'light' : 'dark';
            }
        )
    }
}
