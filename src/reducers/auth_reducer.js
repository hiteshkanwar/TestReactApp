import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_DATA, CLEAR_ERROR} from '../actions/types.js';

export default function (state = {}, action) {
  
  switch (action.type) {
    case AUTH_USER:
      if (localStorage.getItem('admin') === 'true' || action.payload == true )
      {
        return { ...state, error: '', authenticated: true ,admin: true};
      }
      else
      {
        return { ...state, error: '', authenticated: true ,admin: false};
      }
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    case FETCH_DATA:
      return { ...state, data: action.payload };

  }

  return state;
}