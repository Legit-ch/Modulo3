import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	}
];
