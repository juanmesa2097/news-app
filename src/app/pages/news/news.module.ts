import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';

@NgModule({
  declarations: [NewsPage, NewsListComponent],
  imports: [CommonModule, NewsRoutingModule, TuiButtonModule],
  exports: [NewsListComponent],
})
export class NewsModule {}
