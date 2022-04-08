import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MemeService } from '../services/meme.service';


@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class memeListComponent implements OnDestroy {
  private destroyed$ = new Subject<void>();

  public meme$ = this.memeService.getItems$();

  constructor(private memeService: MemeService) { }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
