import 'reflect-metadata';

import {Container} from 'inversify';
import {LoginUseCase} from './application/LoginUseCase';
import {AuthLocator} from './domain/AuthLocator';
import {HttpAuthRepository} from './infrastructure/HttpAuthRepository';
import {AuthRepository} from './domain/AuthRepossitory';

const AuthContainer = new Container();
AuthContainer.bind<LoginUseCase>(AuthLocator.LoginUseCase).to(LoginUseCase);
AuthContainer.bind<AuthRepository>(AuthLocator.AuthRepository).to(
  HttpAuthRepository,
);

export {AuthContainer};
