import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './app-shell/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: 'page',
		loadChildren: './page/page.module#PageModule'
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	declarations: [
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {

}
