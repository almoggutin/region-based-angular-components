import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-basic-example-us',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './basic-example-us.component.html',
	styleUrls: ['./basic-example-us.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExampleUsComponent {}
