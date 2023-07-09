export class User {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly firstLogin: number;
  readonly onDuty: boolean;
  readonly isAcceptingWOs: boolean;
  constructor(
    id: number,
    username: string,
    email: string,
    firstLogin: number,
    onDuty: boolean,
    isAcceptingWOs: boolean,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.firstLogin = firstLogin;
    this.onDuty = onDuty;
    this.isAcceptingWOs = isAcceptingWOs;
  }
  static Empty() {
    return new User(0, '', '', 0, false, false);
  }
}
