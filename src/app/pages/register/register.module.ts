import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiLoaderModule,
  TuiNotificationModule,
} from '@taiga-ui/core';
import { TuiFieldErrorModule } from '@taiga-ui/kit/components/field-error';
import { TuiInputModule } from '@taiga-ui/kit/components/input';
import { PageContentWrapperModule } from 'src/app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from 'src/app/components/page-header-wrapper/page-header-wrapper.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [RegisterPage, RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    PageHeaderWrapperModule,
    PageContentWrapperModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    TuiLoaderModule,
    TuiNotificationModule,
  ],
})
export class RegisterModule {}
