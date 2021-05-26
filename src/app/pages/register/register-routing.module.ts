import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathName } from '@app/core/enums/path-name.enum';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage,
    data: {
      breadcrumbs: [
        {
          caption: 'Inicio',
          routerLink: `/${PathName.Home}`,
        },
        {
          caption: 'Registro',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
