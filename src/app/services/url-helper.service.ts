import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { ParamMap } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class UrlHelperService {
	public dataToParams(data: any, source: HttpParams = null) {
		var qs = new HttpParams();
		for (var p in data) {
			var v = data[p];
			if (v != undefined && v != null && v != "") {
				qs = qs.set(p, v);
			}
		}
		return qs;
	}

	public saveToUrl(data: any, location: Location) {
		let qs: HttpParams;
		if (data instanceof HttpParams) {
			qs = data;
		} else {
			qs = this.dataToParams(data);
		}
		var path = location.path().split('?')[0];
		location.replaceState(path, qs.toString());
	}

	public loadFromUrl<T extends { [param: string]: any }>(data: T, params: ParamMap) {
		for (var p in data) {
			var v = params.get(p);
			data[p] = v;
		}
		return data;
	}
}