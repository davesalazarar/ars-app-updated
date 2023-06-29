export class User {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly firstLogin: number;
  constructor(id: number, username: string, email: string, firstLogin: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.firstLogin = firstLogin;
  }
}
