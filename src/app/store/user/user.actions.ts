import { User } from './user.model';

export namespace UserActions {
  enum ActionType {
    Add = '[User] Add new user',
  }

  export class Add {
    static readonly type = ActionType.Add;
    constructor(public payload: User) {}
  }
}
