import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { iconsPathFactory, TUI_ICONS_PATH } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit/tokens';
import { environment } from 'src/environments/environment';
import { stateList } from '../store/state-list';
import {
  maxLengthValidator,
  minLengthValidator,
} from './utils/validator.utils';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([...stateList], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Campo obligatorio',
        email: 'Email es inválido',
        maxlength: maxLengthValidator,
        minlength: minLengthValidator,
      },
    },
  ],
})
export class CoreModule {}
