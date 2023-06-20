import {Container} from 'inversify';
import {LoginUseCase} from './application/LoginUseCase';
import {AuthLocator} from './domain/AuthLocator';
import {AuthRepository} from './domain/AuthRepossitory';

const AuthContainer = new Container();
AuthContainer.bind<AuthRepository>(AuthLocator.AuthRepository).to(LoginUseCase);

export {AuthContainer};
