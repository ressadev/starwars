import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { EStarWarsDataType, IResultDto } from '../../services/api/api-models';
import { SearchStarWarsReqDto, ResultDto } from '../../services/api/api-models-classes';
import { StarwarsApiService } from '../../services/api/starwars-api-service';
import { UrlHelperService } from '../../services/url-helper.service';
import { UserProgressService } from '../../services/user-progress.service';

@Component({
	selector: 'app-page-search',
	templateUrl: './page-search.component.html',
	styleUrls: ['./page-search.component.less']
})
export class PageSearchComponent implements OnInit {
	EStarWarsDataType = EStarWarsDataType;
	criteria = new SearchStarWarsReqDto();
	searched = false;
	errMessage: string;
	data: IResultDto = new ResultDto();
	
	constructor(
		private title: Title,
		private route: ActivatedRoute,
		private router: Router,
		private starwarsApiService: StarwarsApiService,
		private location: Location,
		private urlHelper: UrlHelperService,
		private progress: UserProgressService
	) {
	}

	ngOnInit() {
		this.title.setTitle('search_starwars');
		this.route.queryParamMap.subscribe(params => {
			this.criteria = this.urlHelper.loadFromUrl(new SearchStarWarsReqDto(), params);
		});
	}

	onClear() {
		this.criteria = new SearchStarWarsReqDto();
		this.searched = false;
		this.urlHelper.saveToUrl({}, this.location);
	}

	onSearch() {
		this.update();
	}

	onStarwarsDataTypeValueChange(dataType: EStarWarsDataType) {
		if (!dataType)
			return;

		switch (dataType) {
		case EStarWarsDataType.People:
			this.criteria.Title = this.criteria.Model = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.People;
			break;
		case EStarWarsDataType.Films:
			this.criteria.Name = this.criteria.Model = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.Films;
			break;
		case EStarWarsDataType.Planets:
			this.criteria.Title = this.criteria.Model = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.Planets;
			break;
		case EStarWarsDataType.Species:
			this.criteria.Title = this.criteria.Model = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.Species;
			break;
		case EStarWarsDataType.Starships:
			this.criteria.Title = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.Starships;
			break;
		case EStarWarsDataType.Vehicles:
			this.criteria.Title = null;
			this.criteria.StarWarsDataType = EStarWarsDataType.Vehicles;
			break;
		}
	}

	private update() {
		this.urlHelper.saveToUrl(this.criteria, this.location);
		this.progress.runAsync(this.starwarsApiService.search(this.criteria))
			.then(data => {
				this.data = data;
				this.searched = true;
			});
	}

	onDetail(url: string) {
		let arr = url.split('/');
		let count = arr.length;
		const id = arr[count-2];
		console.info("id: " + id);
		this.router.navigate(['detail', id],
			{
				relativeTo: this.route.parent,
				queryParams: { type: this.criteria.StarWarsDataType }
			});
	}

	onShowAll() {
		this.router.navigate(['overview'],
			{
				relativeTo: this.route.parent,
				queryParams: { type: this.criteria.StarWarsDataType}
			});
	}
}