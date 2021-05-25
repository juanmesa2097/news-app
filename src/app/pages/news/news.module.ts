import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';

@NgModule({
  declarations: [NewsPage],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
