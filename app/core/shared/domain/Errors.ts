export abstract class Error {
  private _code: string;
  private _message: string;
  constructor(private code: string, message: string) {
    this._code = code;
    this._message = message;
  }
}

export class InvalidTokenError extends Error {
  constructor() {
    super('invalid_token_error', 'The token is invalid');
  }
}

export class InvalidCredentialsError extends Error {
  constructor() {
    super('invalid_credentials_error', "Account & Password doesn't match!");
  }
}

export class InvalidAppVersionError extends Error {
  constructor() {
    super(
      'invalid_app_version_error',
      'This version off the app is deprecated, please install a new one',
    );
  }
}
