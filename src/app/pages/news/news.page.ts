import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsActions } from '@app/store/news/news.actions';
import { News } from '@app/store/news/news.model';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy {
  destroy$ = new Subject();

  currentNews!: News | null;
  newsId!: string;
  otherNews!: News[];

  breadcrumbs = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.breadcrumbs = activatedRoute.snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.newsId = params['id'];
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.store
          .dispatch(new NewsActions.Get())
          .pipe(
            map((state) => {
              const news: News[] = state.news.news;

              return {
                currentNews: news.find((n) => n.id === this.newsId) || null,
                otherNews: news.filter((n) => n.id !== this.newsId),
              };
            })
          )
          .subscribe(({ currentNews, otherNews }) => {
            this.currentNews = currentNews;
            this.otherNews = otherNews;
          });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
