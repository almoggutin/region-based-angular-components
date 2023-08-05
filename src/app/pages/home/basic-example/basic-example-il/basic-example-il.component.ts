import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-basic-example-il',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './basic-example-il.component.html',
	styleUrls: ['./basic-example-il.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExampleIlComponent {}
