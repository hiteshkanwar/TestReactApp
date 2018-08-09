import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import usersReducer from '../reducers/users'

//add reducers here as you develop new ones
const rootReducer = combineReducers({
	auth: authReducer,
	users: usersReducer
});

export default rootReducer;
