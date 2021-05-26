import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewsActions } from './news.actions';
import { News } from './news.model';
import { NewsService } from './news.service';

interface NewsStateModel {
  news: News[];
  loading: boolean;
}

@State<NewsStateModel>({
  name: 'news',
  defaults: {
    news: [],
    loading: false,
  },
})
@Injectable()
export class NewsState {
  constructor(private newsService: NewsService) {}

  @Selector()
  static getNews({ news }: NewsStateModel): News[] {
    return news;
  }

  @Selector()
  static loading({ loading }: NewsStateModel): boolean {
    return loading;
  }

  @Action(NewsActions.Get)
  get({ patchState }: StateContext<NewsStateModel>): Observable<News[]> {
    patchState({ loading: true });

    return this.newsService
      .list<News[]>()
      .pipe(tap((news) => patchState({ news, loading: false })));
  }
}
