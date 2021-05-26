import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { PageContentWrapperModule } from 'src/app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from 'src/app/components/page-header-wrapper/page-header-wrapper.module';
import { NewsModule } from '../news/news.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageHeaderWrapperModule,
    PageContentWrapperModule,
    NewsModule,
    TuiLoaderModule,
    TuiSvgModule,
  ],
})
export class HomeModule {}
