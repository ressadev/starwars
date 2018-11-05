import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { EStarWarsDataType } from '../../services/api/api-models';
import { ResultDto } from '../../services/api/api-models-classes';
import { StarwarsApiService } from '../../services/api/starwars-api-service';
import { UserProgressService } from '../../services/user-progress.service';

@Component({
	selector: 'app-page-overview',
	templateUrl: './page-overview.component.html',
	styleUrls: ['./page-overview.component.less']
})
export class PageOverviewComponent implements OnInit {
	EStarWarsDataType = EStarWarsDataType;
	data: any;
	dataType: EStarWarsDataType;

	constructor(
		private title: Title,
		private route: ActivatedRoute,
		private router: Router,
		private starwarsApiService: StarwarsApiService,
		private progress: UserProgressService
	) {
	}

	ngOnInit() {
		this.title.setTitle('overview_starwars');
		this.getData();
	}

	private getData() {
		const type = +this.route.snapshot.queryParamMap.get('type');
		console.info("type ", type);
		this.dataType = this.getDataType(type);
		this.progress.runAsync(this.starwarsApiService.overview(type))
			.then(data => {
				this.data = data;
			});
	}

	private getDataType(type: number) {
		this.data = new ResultDto();
		switch (type) {
		case EStarWarsDataType.People:
			return EStarWarsDataType.People;
		case EStarWarsDataType.Films:
			return EStarWarsDataType.Films;
		case EStarWarsDataType.Planets:
			return EStarWarsDataType.Planets;
		case EStarWarsDataType.Species:
			return EStarWarsDataType.Species;
		case EStarWarsDataType.Vehicles:
			return EStarWarsDataType.Vehicles;
		case EStarWarsDataType.Starships:
			return EStarWarsDataType.Starships;
		}
	}
}