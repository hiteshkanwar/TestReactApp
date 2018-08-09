import React from 'react';
import ReactDOM from 'react-dom';
import  {AUTH_USER} from  './actions/types';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

const token = localStorage.getItem('uid');


if(token){
	store.dispatch({
		type: AUTH_USER
	});
}



 // store.dispatch(addPost({ title: 'Test1', description: 'Water Bill' }));
 // store.dispatch(addPost({ title: 'Rent', description: 'Bill' }));

// const state = store.getState();

// console.log(state)

store.subscribe(() =>
  console.log(store.getState())
)

const jsx = (
    <Provider store = {store}>
      <AppRouter/>
    </Provider>
	);


ReactDOM.render( jsx, document.getElementById('app'));