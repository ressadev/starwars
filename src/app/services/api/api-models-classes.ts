import { NgModule } from '@angular/core';

import * as ApiModels from './api-models';

@NgModule({
	imports: [
	],
	declarations: [
	]
})

export class ApiClassesModule {
}

//---------------------------------------------------------------------------------------------------

export class SearchStarWarsReqDto {
	Id: number = null;
	Name: string = null;
	Title: string = null;
	Model: string = null;
	StarWarsDataType: ApiModels.EStarWarsDataType = null;
}

export class ResultDto implements ApiModels.IResultDto {
	count: number = null;
	next: string = null;
	previous: string = null;
	results: string[] = [];
}

export class DataDto implements ApiModels.IDataDto {
	created: string = null;
	edited: string = null;
	url: string = null;
}

export class PilotDto extends DataDto implements ApiModels.IPilotDto {
	name: string = null;
	height: string = null;
	mass: string = null;
	hair_color: string = null;
	skin_color: string = null;
	eye_color: string = null;
	birth_year: string = null;
	gender: string = null;
	homeworld: string = null;
	films: string[] = [];
	species: string[] = [];
	vehicles: string[] = [];
	starships: string[] = [];
}

export class FilmDto extends DataDto implements ApiModels.IFilmDto {
	title: string = null;
	episode_id: number = null;
	opening_crawl: string = null;
	director: string = null;
	producer: string = null;
	release_date: string = null;
	characters: string[] = [];
	planets: string[] = [];
	starships: string[] = [];
	vehicles: string[] = [];
	species: string[] = [];
}

export class StarshipDto extends DataDto implements ApiModels.IStarshipDto {
	name: string = null;
	model: string = null;
	manufacturer: string = null;
	cost_in_credits: string = null;
	length: string = null;
	max_atmosphering_speed: string = null;
	crew: string = null;
	passengers: string = null;
	cargoCapacity: string = null;
	consumables: string = null;
	hyperdrive_rating: string = null;
	MGLT: string = null;
	starship_class: string = null;
	pilots: string[] = [];
	films: string[] = [];
}

export class SpecieDto extends DataDto implements ApiModels.ISpecieDto {
	name: string = null;
	classification: string = null;
	designation: string = null;
	average_height: string = null;
	skin_colors: string = null;
	hear_colors: string = null;
	eye_colors: string = null;
	average_lifespan: string = null;
	homeworld: string = null;
	language: string = null;
	people: string[] = [];
	films: string[] = [];
}

export class VehicleDto extends DataDto implements ApiModels.IVehicleDto {
	name: string = null;
	model: string = null;
	manufacturer: string = null;
	cost_in_credits: string = null;
	length: string = null;
	max_atmosphering_speed: string = null;
	crew: string = null;
	passengers: string = null;
	cargo_capacity: string = null;
	consumables: string = null;
	vehicle_class: string = null;
	pilots: string[] = [];
	films: string[] = [];
}

export class PlanetDto extends DataDto implements ApiModels.IPlanetDto {
	name: string = null;
	rotation_period: string = null;
	orbital_period: string = null;
	diameter: string = null;
	climate: string = null;
	gravity: string = null;
	terrain: string = null;
	surface_water: string = null;
	population: string = null;
	residents: string[] = [];
	films: string[] = [];
}