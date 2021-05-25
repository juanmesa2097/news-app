import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContentWrapperModule } from 'src/app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from 'src/app/components/page-header-wrapper/page-header-wrapper.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageHeaderWrapperModule,
    PageContentWrapperModule,
  ],
})
export class HomeModule {}
