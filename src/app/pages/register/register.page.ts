import { Component, OnInit } from '@angular/core';
import { ProgramsActions } from '@app/store/programs/programs.actions';
import { Program } from '@app/store/programs/programs.model';
import { ProgramsState } from '@app/store/programs/programs.state';
import { UserState } from '@app/store/user/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Select(UserState.loading) loading$!: Observable<boolean>;

  @Select(ProgramsState.getPrograms) programs$!: Observable<Program[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ProgramsActions.Get());
  }
}
