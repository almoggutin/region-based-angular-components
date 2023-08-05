import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-us.component.html',
  styleUrls: ['./title-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleUsComponent {

}
