import { Component, OnInit } from '@angular/core';

/* Services */
import { SocialNetworkStatsService } from './services/social-network-stats.service';
import { ThemeModeService } from './../../shared/theme-mode.service';

/* Models */
import { SnUserStats } from './models/snUserStats.model';

@Component({
    selector: 'jx-sm-dashboard',
    templateUrl: './sm-dashboard.component.html',
    styleUrls: ['./sm-dashboard.component.scss']
})
export class SmDashboardComponent implements OnInit {

    public snUserStats: SnUserStats | any = {};

    constructor(
        private _snss: SocialNetworkStatsService,
        private _themeMode: ThemeModeService
    ) {
        this._snss.getSocialNetworksStats().subscribe(
            (data: SnUserStats) => {
                this.snUserStats = data;
            }
        );
    }

    ngOnInit(): void {
    }

    public changeTheme(): void {
        this._themeMode.changeTheme();
    }
}
