import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IMeme } from '../model/meme.model';

@Component({
  selector: 'app-meme-list-item',
  templateUrl: './meme-list-item.component.html',
  styleUrls: ['./meme-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemeListItemComponent {
  @Input() item?: IMeme;
}
