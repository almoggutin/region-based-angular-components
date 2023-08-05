import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { ILocale, Region } from '../models';

@Injectable({
	providedIn: 'root',
})
export class LocalizationService {
	private _locale$ = new BehaviorSubject<ILocale>({
		region: Region.IL,
	});

	locale$: Observable<ILocale> = this._locale$.asObservable();
	region$: Observable<Region> = this._locale$.pipe(map((locale: ILocale) => locale.region));

	get locale(): ILocale {
		return this._locale$.value;
	}

	setLocale(updatedLocaleValues: Partial<ILocale>): void {
		const updatedLocale: ILocale = {
			...this.locale,
			...updatedLocaleValues,
		};

		this._locale$.next(updatedLocale);
	}
}
