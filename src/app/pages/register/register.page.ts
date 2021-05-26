import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsActions } from '@app/store/programs/programs.actions';
import { Program } from '@app/store/programs/programs.model';
import { ProgramsState } from '@app/store/programs/programs.state';
import { UserActions } from '@app/store/user/user.actions';
import { User } from '@app/store/user/user.model';
import { UserState } from '@app/store/user/user.state';
import { Select, Store } from '@ngxs/store';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Select(UserState.loading) loading$!: Observable<boolean>;

  @Select(ProgramsState.getPrograms) programs$!: Observable<Program[]>;

  breadcrumbs = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private notificationsService: TuiNotificationsService
  ) {
    const { data } = this.activatedRoute.snapshot;
    this.breadcrumbs = data.breadcrumbs;
  }

  ngOnInit(): void {
    this.store.dispatch(new ProgramsActions.Get());
  }

  onRegister(user: User): void {
    this.store
      .dispatch(new UserActions.Add(user))
      .subscribe(() => this.showNotification());
  }

  private showNotification() {
    this.notificationsService
      .show('El usuario fue registrado correctamente', {
        label: '¡Éxito!',
        status: TuiNotification.Success,
      })
      .subscribe();
  }
}
