import { browserHistory} from 'react-router';
import  { UNAUTH_USER} from  './types';
import AppRouter, { history } from '../routers/AppRouter';



export default function signoutUser(){
  // this clears the localstorage token 
  localStorage.removeItem('uid');
  localStorage.removeItem('admin');
  history.push('/');
  return {
    type: UNAUTH_USER
  };

  
}