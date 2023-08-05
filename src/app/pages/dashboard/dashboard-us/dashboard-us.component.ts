import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-dashboard-us',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dashboard-us.component.html',
	styleUrls: ['./dashboard-us.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsComponent {}
