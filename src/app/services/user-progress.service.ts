import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class UserProgressService {
	running: boolean = false;
	loading: boolean = false;

	start(isLoading: boolean = false) {
		setTimeout(() => isLoading ? this.loading = true : this.running = true, 0);
	}

	stop() {
		setTimeout(() => this.loading = this.running = false, 0);
	}

	runProgress<T>(obs: Observable<T>, isLoading: boolean = false): Observable<T> {
		this.start(isLoading);
		return obs.pipe(
					catchError(e => { this.stop(); throw e; }),
					map(x => { this.stop(); return x; }),
					first()
			   );
	}

	runAsync<T>(obs: Observable<T>): Promise<T> {
		return this.run(obs.toPromise());
	}

	private run<T>(promise: Promise<T>): Promise<T> {
		this.start();
		return promise
			.then(data => {
				this.stop();
				return data;
			})
			.catch(x => {
				this.stop();
				throw x;
			});
	}
}