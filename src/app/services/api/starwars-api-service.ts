import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as ApiModels from './api-models';
import { ApiBaseService } from '../api-base.service';

@Injectable({
	providedIn: 'root',
	useExisting: false
})

export class StarwarsApiService {
	constructor(
		public api: ApiBaseService
	) {
	}

	public search(criteria: ApiModels.ISearchStarWarsReqDto): Observable<ApiModels.IResultDto> {
		let url: string;
		if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.People) {
			url = `people/?search=${criteria.Name}`;
		} else if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.Films) {
			url = `films/?search=${criteria.Title}`;
		} else if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.Planets) {
			url = `planets/?search=${criteria.Name}`;
		} else if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.Species) {
			url = `species/?search=${criteria.Name}`;
		} else if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.Starships) {
			url = `starships/?search=${criteria.Name}`;
		} else if (criteria.StarWarsDataType == ApiModels.EStarWarsDataType.Vehicles) {
			url = `vehicles/?search=${criteria.Name}`;
		} else {
			return null;
		}
		return this.api.get(url);
	}

	public detail(id: number, type: number): Observable<ApiModels.IDataDto> {
		let url: string;
		switch (type) {
			case ApiModels.EStarWarsDataType.People:
				url = `people/${id}`;
				break;
			case ApiModels.EStarWarsDataType.Films:
				url = `films/${id}`;
				break;
			case ApiModels.EStarWarsDataType.Planets:
				url = `planets/${id}`;
				break;
			case ApiModels.EStarWarsDataType.Species:
				url = `species/${id}`;
				break;
			case ApiModels.EStarWarsDataType.Starships:
				url = `starships/${id}`;
				break;
			case ApiModels.EStarWarsDataType.Vehicles:
				url = `vehicles/${id}`;
				break;
			default:
				console.info("Incorrect data type id");
				return null;
		}
		return this.api.get(url);
	}

	public getDetail(url: string): Observable<ApiModels.IDataDto> {
		return this.api.getAsIs(url);
	}

	public overview(dataType: number): Observable<ApiModels.IResultDto> {
		let url: string;
		if (dataType == ApiModels.EStarWarsDataType.People) {
			url = `people/`;
		} else if (dataType == ApiModels.EStarWarsDataType.Films) {
			url = `films/`;
		} else if (dataType == ApiModels.EStarWarsDataType.Planets) {
			url = `planets/`;
		} else if (dataType == ApiModels.EStarWarsDataType.Species) {
			url = `species/`;
		} else if (dataType == ApiModels.EStarWarsDataType.Starships) {
			url = `starships/`;
		} else if (dataType == ApiModels.EStarWarsDataType.Vehicles) {
			url = `vehicles/`;
		} else {
			return null;
		}
		return this.api.get(url);
	}
}