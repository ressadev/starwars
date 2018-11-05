import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageOverviewComponent } from './page-overview/page-overview.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PageRoutingModule,
		AppCommonModule
	],
	declarations: [
		PageSearchComponent,
		PageDetailComponent,
		PageOverviewComponent
	]
})

export class PageModule {
}