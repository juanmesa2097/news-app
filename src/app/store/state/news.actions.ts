export namespace NewsActions {
  enum ActionType {
    Get = '[News] Get all news',
  }

  export class Get {
    static readonly type = ActionType.Get;
  }
}
