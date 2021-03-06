import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserActions } from './user.actions';
import { User } from './user.model';
import { UserService } from './user.service';

interface UserStateModel {
  user: User | null;
  loading: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
    loading: false,
  },
})
@Injectable()
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  static loading({ loading }: UserStateModel): boolean {
    return loading;
  }

  @Action(UserActions.Add)
  add(
    { patchState }: StateContext<UserStateModel>,
    { payload }: UserActions.Add
  ) {
    patchState({ loading: true });

    return this.userService.add(payload).pipe(
      tap((user) => {
        console.log(user);
        patchState({ user: payload, loading: false });
      })
    );
  }
}
