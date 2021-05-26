import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsActions } from '@app/store/news/news.actions';
import { News } from '@app/store/news/news.model';
import { NewsState } from '@app/store/news/news.state';
import { Store } from '@ngxs/store';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news!: News;

  newsId!: string;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    const params = this.activatedRoute.snapshot.paramMap;

    this.newsId = params.get('id') || '';
  }

  ngOnInit(): void {
    if (!this.newsId) return;

    this.store
      .select<News[]>(NewsState.getNews)
      .pipe(
        switchMap((news: News[]) => {
          if (news.length) return news;

          return this.store
            .dispatch(new NewsActions.Get())
            .pipe(map((state) => state.news));
        }),
        filter((news: News) => news.id === this.newsId)
      )
      .subscribe((news) => (this.news = news));
  }
}
