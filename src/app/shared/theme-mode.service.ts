import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeModeService {

    public themeModeState: Subject<string>;

    constructor() {
        this.themeModeState = new Subject();
    }

    public changeTheme(): void {
        this.themeModeState.next('dark');
    }
}
