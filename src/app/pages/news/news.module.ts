import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContentWrapperModule } from '@app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from '@app/components/page-header-wrapper/page-header-wrapper.module';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit/components/breadcrumbs';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';

@NgModule({
  declarations: [NewsPage, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    PageHeaderWrapperModule,
    PageContentWrapperModule,
    TuiButtonModule,
    TuiBreadcrumbsModule,
  ],
  exports: [NewsListComponent],
})
export class NewsModule {}
