import RemoveUserApi  from '../api/removeUser';
import CreateUserApi  from '../api/createUser';
import UpdateUserApi  from '../api/updateUser';


export function createUserSuccess(res) { 
  return {
    type: 'CREATE_USER_SUCCESS', res
  }
}

export function createUser(user) { 
console.log(33333333) 
  return function(dispatch) {
    return CreateUserApi.create(user).then((res) => {
      dispatch(createUserSuccess(res));
      return;
    }).catch(error => {
      dispatch(createUserError(error));
    })
  }
}


export function createUserError(error) {  
  return {
    type: 'CREATE_USER_ERROR', error
  }
}




export function updateUserSuccess(res) { 
  return {
    type: 'UPDATE_USER_SUCCESS', res
  }
}

export function updateUser(user) { 
console.log(33333333) 
  return function(dispatch) {
    return UpdateUserApi.update(user).then((res) => {
      debugger
      dispatch(updateUserSuccess(res));
      return;
    }).catch(error => {
      dispatch(updateUserError(error));
    })
  }
}

export function updateUserError(error) {  
  return {
    type: 'UPDATE_USER_ERROR', error
  }
}

















export function removeUserSuccess(user) {  
  return {
    type: 'REMOVE_USER_SUCCESS', user
  }
}

export function removeUser(user) {  
  return function(dispatch) {
    return RemoveUserApi.removeUser(user).then(() => {
      dispatch(removeUserSuccess(user));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}

export function getUserSuccess (users) {
  type: 'USER_SUCCESS',
  users
  return {
    type: 'USER_SUCCESS', users
  }
}

export default function getAllUsers(users) {  
  return function(dispatch) {
      dispatch(getUserSuccess(users));     
  }
}


