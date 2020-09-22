import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'social-media-dashboard', loadChildren: () => import('./pages/sm-dashboard/sm-dashboard.module').then(m => m.SmDashboardModule) },
    { path: '**', pathMatch: 'full', redirectTo: 'social-media-dashboard' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
