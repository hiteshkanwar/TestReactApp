import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/users';
import UserForm from './UserForm';


const AddUser = (props) =>{
  return(
    <UserForm 
     onSubmit = {(user)=>{
       props.dispatch(createUser(user));
     }}
    />
  );
}



export default connect()(AddUser)
