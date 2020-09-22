import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Router */
import { SmDashboardRoutingModule } from './sm-dashboard-routing.module';

/* Components */
import { SmDashboardComponent } from './sm-dashboard.component';
import { SmdFollowersCardComponent } from './smd-followers-card/smd-followers-card.component';
import { SmdOverviewCardComponent } from './smd-overview-card/smd-overview-card.component';

/* Modules */
import { SharedModule } from './../../shared/shared.module';

/* Services */
import { SocialNetworkStatsService } from './services/social-network-stats.service';

/* Pipes */
import { SpacedPascalCasPipe } from './pipes/spacedPascalCase';
import { SeparateNumberPipe } from './pipes/separateNumber.pipe';
import { CompressedNumberPipe } from './pipes/compressedNumber.pipe';

/* Directives */
import { ToggleSlideDirective } from './directives/toggle-slide.directive';

@NgModule({
    declarations: [
        SmDashboardComponent,
        SmdFollowersCardComponent,
        SmdOverviewCardComponent,
        SpacedPascalCasPipe,
        SeparateNumberPipe,
        CompressedNumberPipe,
        ToggleSlideDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SmDashboardRoutingModule
    ],
    providers: [SocialNetworkStatsService]
})
export class SmDashboardModule { }