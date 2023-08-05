import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-input-example-il',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './input-example-il.component.html',
	styleUrls: ['./input-example-il.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputExampleIlComponent {
	@Input() name!: string;
	@Input() age!: number;

	@Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

	handleClick(): void {
		this.onClick.emit(true);
	}
}
