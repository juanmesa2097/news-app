import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { News } from '@app/store/news/news.model';
import { PathName } from 'src/app/core/enums/path-name.enum';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  @Input() data!: News[];

  pathName = PathName;

  constructor() {}

  ngOnInit(): void {}
}
