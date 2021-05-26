import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathName } from './core/enums/path-name.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathName.Home,
    pathMatch: 'full',
  },
  {
    path: PathName.Home,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PathName.Register,
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: PathName.News,
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
