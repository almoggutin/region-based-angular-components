import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { LocalizationService } from '../../services';

import { Region } from '../../models';

@Component({
	selector: 'app-region-section',
	standalone: true,
	imports: [NgIf, AsyncPipe, UpperCasePipe],
	templateUrl: './region-section.component.html',
	styleUrls: ['./region-section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionSectionComponent {
	private readonly localizationService = inject(LocalizationService);

	region$: Observable<Region> = this.localizationService.region$;

	Region = Region;

	handleRegionChange(region: Region): void {
		this.localizationService.setLocale({ region });
	}
}
