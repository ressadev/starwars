import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppCommonModule } from './app-common/app-common.module';
import { AppConfig } from './app-config';
import { UserProgressService } from './services/user-progress.service';
import { UrlHelperService } from './services/url-helper.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpModule,
		HttpClientModule,
		AppShellModule,
		AppCommonModule
	],
	providers: [
		AppConfig,
		Location,
		UserProgressService,
		UrlHelperService,
		Title
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {

}
