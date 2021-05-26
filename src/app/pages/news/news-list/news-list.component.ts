import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { News } from '@app/store/news/news.model';
import { PathName } from 'src/app/core/enums/path-name.enum';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() data!: News[];

  pathName = PathName;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.data = [...this.data, ...this.data, ...this.data];
  }

  ngOnInit(): void {}
}
