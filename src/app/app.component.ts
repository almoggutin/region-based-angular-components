import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { tap, Observable } from 'rxjs';

import { LocalizationService } from './services';

import { HeaderComponent } from './components/header/header.component';

import { Region } from './models';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NgIf, AsyncPipe, UpperCasePipe, RouterOutlet, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	private readonly localizationService = inject(LocalizationService);

	region$: Observable<Region> = this.localizationService.region$;

	Region = Region;

	handleRegionChange(region: Region): void {
		this.localizationService.setLocale({ region });
	}
}
