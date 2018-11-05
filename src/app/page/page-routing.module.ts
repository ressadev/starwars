import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageSearchComponent } from './page-search/page-search.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageOverviewComponent } from './page-overview/page-overview.component';

const routes: Routes = [
	{ path: 'search', component: PageSearchComponent },
	{ path: 'detail/:id', component: PageDetailComponent },
	{ path: 'overview', component: PageOverviewComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class PageRoutingModule {
}