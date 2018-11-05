import { NgModule } from '@angular/core';

@NgModule({
	imports: [
	],
	declarations: [
	]
})

export class ApiModelsModule {
}

//--------------------------------------------------------------------------------------

export interface ISearchStarWarsReqDto {
	Id: number;
	Name: string;
	Title: string;
	Model: string;
	StarWarsDataType: EStarWarsDataType;
}

export enum EStarWarsDataType {
	People = 1,
	Planets = 2,
	Species = 3,
	Vehicles = 4,
	Starships = 5,
	Films = 6,
}

export interface IResultDto {
	count: number;
	next: string;
	previous: string;
	results: string[];
}

export interface IDataDto {
	created: string;
	edited: string;
	url: string;
}

export interface IPilotDto extends IDataDto {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
}

export interface IFilmDto extends IDataDto {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
}

export interface IStarshipDto extends IDataDto {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargoCapacity: string;
	consumables: string;
	hyperdrive_rating: string;
	MGLT: string;
	starship_class: string;
	pilots: string[];
	films: string[];
}

export interface ISpecieDto extends IDataDto {
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hear_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: string;
	language: string;
	people: string[];
	films: string[];
}

export interface IVehicleDto extends IDataDto {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	pilots: string[];
	films: string[];
}

export interface IPlanetDto extends IDataDto {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
	films: string[];
}