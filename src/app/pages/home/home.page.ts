import { Component, OnInit } from '@angular/core';
import { NewsActions } from '@app/store/news/news.actions';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { News } from 'src/app/store/state/news.model';
import { NewsState } from 'src/app/store/state/news.state';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Select(NewsState.getNews) news$!: Observable<News[]>;
  @Select(NewsState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new NewsActions.Get());
  }
}
