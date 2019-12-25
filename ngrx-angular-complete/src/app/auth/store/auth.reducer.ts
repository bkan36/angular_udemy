import {User} from '../user.model';
import * as AuthListActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: false
};

export function AuthReducer(state = initialState, action: AuthListActions.AuthActions) {
  switch (action.type) {
    case AuthListActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate);
      return {
        ...state,
        authError: null,
        user,
        loading: false
      };
    case AuthListActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthListActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
      case AuthListActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
    case AuthListActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      }
    default:
      return state;

  }
}
