import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { SmDashboardComponent } from './sm-dashboard.component';

const routes: Routes = [
    { path: '', component: SmDashboardComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmDashboardRoutingModule { }