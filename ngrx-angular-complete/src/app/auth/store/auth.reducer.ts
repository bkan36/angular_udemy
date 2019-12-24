import {User} from '../user.model';
import * as AuthListActions from './auth.actions';

export interface State {
  user: User;
}

const initialState = {
  user: null
};

export function AuthReducer(state = initialState, action: AuthListActions.AuthActions) {
  switch (action.type) {
    case AuthListActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate);
      return {
        ...state,
        user
      };
    case AuthListActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return;

  }
}
