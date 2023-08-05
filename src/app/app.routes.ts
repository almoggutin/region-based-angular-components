import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./components/dyanmic-component-loader/dyanmic-component-loader.component').then(
				(m) => m.DyanmicComponentLoaderComponent
			),
		data: {
			componentSelector: 'appDashboard',
		},
	},
	{
		path: '**',
		redirectTo: '',
	},
];
