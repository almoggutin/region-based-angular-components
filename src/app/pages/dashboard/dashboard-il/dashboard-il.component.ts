import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-il',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-il.component.html',
  styleUrls: ['./dashboard-il.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardIlComponent {

}
