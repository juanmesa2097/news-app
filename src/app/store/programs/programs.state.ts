import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgramsActions } from './programs.actions';
import { Program } from './programs.model';
import { ProgramsService } from './programs.service';

interface ProgramsStateModel {
  programs: Program[];
  loading: boolean;
}

@State<ProgramsStateModel>({
  name: 'programs',
  defaults: {
    programs: [],
    loading: false,
  },
})
@Injectable()
export class ProgramsState {
  constructor(private programsService: ProgramsService) {}

  @Action(ProgramsActions.Get)
  get({ patchState }: StateContext<ProgramsStateModel>): Observable<Program[]> {
    patchState({ loading: true });

    return this.programsService
      .list<Program[]>()
      .pipe(tap((programs) => patchState({ programs, loading: false })));
  }
}
