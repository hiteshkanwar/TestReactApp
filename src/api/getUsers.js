import getAllUsers  from '../actions/users';
import { connect } from 'react-redux';


export function getUsers(selected,value) {
  return dispatch => {
    return fetch(`http://localhost:3000/users/index?page=${selected}&&q=${value}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getAllUsers(json.users));
        return json.users;
      })
      .catch(error => {
        error
      });
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}