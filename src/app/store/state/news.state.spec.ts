import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { NewsState } from './news.state';

describe('News actions', () => {
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([NewsState]), HttpClientModule],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('should create an action and get all news', () => {
    // store.dispatch(new NewsActions.Get());
    // store
    //   .select((state) => state.news.news)
    //   .subscribe((news: News[]) => {
    //     console.log(news);
    //     expect(news).toEqual([]);
    //   });
  });
});
