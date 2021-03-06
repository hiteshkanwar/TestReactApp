import axios from 'axios';
import  {AUTH_USER} from  './types';
import authError from './error';
import { ROOT_URL } from '../../.env';
import AppRouter, { history } from '../routers/AppRouter';
import { connect } from 'react-redux';
import { getUser } from './users';



export default function signinUser(email, password) {
  return function (dispatch) {

    // Submit email/password to the server
    axios.post(`http://localhost:3000/auth/sign_in`, { email, password })
      .then((response) => {
        //update state
        dispatch({
          type: AUTH_USER,
          payload: response.data.data.is_admin
        });
        //save admin true and false
        if ( response.data.data.is_admin == true){
          localStorage.setItem('admin',true);
        }
        else{
          localStorage.setItem('admin',false);
        }
        //save jwt token to local storage
        localStorage.setItem('uid', response.data.data.uid);
        //redirect navigation on signin
        history.push('/');

      })
      .catch(() => {
        dispatch(authError('Email or Password are incorrect'));
      });
  };
}