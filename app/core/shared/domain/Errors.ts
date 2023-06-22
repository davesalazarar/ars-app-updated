export abstract class DomainError {
  readonly code: string;
  readonly message: string;
  constructor(_code: string, _message: string) {
    this.code = _code;
    this.message = _message;
  }
}

export class InvalidTokenError extends DomainError {
  constructor() {
    super('invalid_token_error', 'The token is invalid');
  }
}

export class InvalidCredentialsError extends DomainError {
  constructor(message: string) {
    super('invalid_credentials_error', message);
  }
}

export class InvalidAppVersionError extends DomainError {
  constructor() {
    super(
      'invalid_app_version_error',
      'This version off the app is deprecated, please install a new one',
    );
  }
}
