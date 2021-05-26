export namespace NewsActions {
  enum ActionType {
    Get = '[News] Get news',
  }

  export class Get {
    static readonly type = ActionType.Get;
  }
}
