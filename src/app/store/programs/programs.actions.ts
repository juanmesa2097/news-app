export namespace ProgramsActions {
  enum ActionType {
    Get = '[Programs] Get programs',
  }

  export class Get {
    static readonly type = ActionType.Get;
  }
}
