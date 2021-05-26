import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathName } from '@app/core/enums/path-name.enum';
import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: ':id',
    component: NewsPage,
    data: {
      breadcrumbs: [
        {
          caption: 'Inicio',
          routerLink: `/${PathName.Home}`,
        },
        {
          caption: 'Noticias',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
