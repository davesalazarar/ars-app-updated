import 'reflect-metadata';

import {Container} from 'inversify';
import {LoginUseCase} from './application/LoginUseCase';
import {AuthLocator} from './domain/AuthLocator';
import {HttpAuthRepository} from './infrastructure/HttpAuthRepository';
import {AuthRepository} from './domain/AuthRepossitory';
import {LogoutUseCase} from './application/LogoutUseCase';

const AuthContainer = new Container();
AuthContainer.bind<LoginUseCase>(AuthLocator.LoginUseCase).to(LoginUseCase);
AuthContainer.bind<LogoutUseCase>(AuthLocator.LogoutUseCase).to(LogoutUseCase);
AuthContainer.bind<AuthRepository>(AuthLocator.AuthRepository).to(
  HttpAuthRepository,
);
export {AuthContainer};
