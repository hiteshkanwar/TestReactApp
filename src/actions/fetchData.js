import axios from 'axios';
import { FETCH_DATA } from './types';
import authError from './error';
import { ROOT_URL } from '../../.env';


export default function fetchData(){
  
 return function(dispatch) {
    axios.get('http://localhost:3000', {headers: {authorization: localStorage.getItem('uid')}})
      .then(res => {    
        dispatch({
          type: FETCH_DATA,
          payload: res.data.message
        });
      })
      .catch(() => {        
        dispatch(authError('Please Login'));
      });
 };
  
}