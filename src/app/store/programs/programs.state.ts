import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  @Selector()
  static getPrograms({ programs }: ProgramsStateModel): Program[] {
    return programs;
  }

  @Selector()
  static loading({ loading }: ProgramsStateModel): boolean {
    return loading;
  }

  @Action(ProgramsActions.Get)
  get({ patchState }: StateContext<ProgramsStateModel>): Observable<Program[]> {
    patchState({ loading: true });
    const namesBag: string[] = [];

    return this.programsService.list<Program[]>().pipe(
      map((programs) =>
        programs.filter((program) => {
          if (!namesBag.includes(program.name)) {
            namesBag.push(program.name);
            return program;
          }

          return;
        })
      ),
      tap((programs) => patchState({ programs, loading: false }))
    );
  }
}
