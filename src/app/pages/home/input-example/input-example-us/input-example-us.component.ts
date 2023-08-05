import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-input-example-us',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './input-example-us.component.html',
	styleUrls: ['./input-example-us.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputExampleUsComponent {
	@Input() name!: string;
	@Input() age!: number;
}
