import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-il',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-il.component.html',
  styleUrls: ['./title-il.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleIlComponent {

}
