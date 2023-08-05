import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DyanmicComponentLoaderComponent } from 'src/app/components/dyanmic-component-loader/dyanmic-component-loader.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [DyanmicComponentLoaderComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
