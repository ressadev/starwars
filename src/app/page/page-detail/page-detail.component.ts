import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { EStarWarsDataType } from '../../services/api/api-models';
import { PilotDto, FilmDto, PlanetDto, SpecieDto, VehicleDto, StarshipDto } from '../../services/api/api-models-classes';
import { StarwarsApiService } from '../../services/api/starwars-api-service';
import { UserProgressService } from '../../services/user-progress.service';

@Component({
	selector: 'app-page-detail',
	templateUrl: './page-detail.component.html',
	styleUrls: ['./page-detail.component.less']
})

export class PageDetailComponent implements OnInit {
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
		this.title.setTitle('detail_starwars');
		this.getData();
	}

	private getData() {
		const id = +this.route.snapshot.paramMap.get('id');
		const type = +this.route.snapshot.queryParamMap.get('type');
		this.dataType = this.getDataType(type);
		this.progress.runAsync(this.starwarsApiService.detail(id, type))
			.then(data => {
				this.data = data;
			});
	}

	private getDataType(type: number) {
		switch (type) {
			case EStarWarsDataType.People:
				this.data = new PilotDto();
				return EStarWarsDataType.People;
			case EStarWarsDataType.Films:
				this.data = new FilmDto();
				return EStarWarsDataType.Films;
			case EStarWarsDataType.Planets:
				this.data = new PlanetDto();
				return EStarWarsDataType.Planets;
			case EStarWarsDataType.Species:
				this.data = new SpecieDto();
				return EStarWarsDataType.Species;
			case EStarWarsDataType.Vehicles:
				this.data = new VehicleDto;
				return EStarWarsDataType.Vehicles;
			case EStarWarsDataType.Starships:
				this.data = new StarshipDto();
				return EStarWarsDataType.Starships;
		}
	}
}