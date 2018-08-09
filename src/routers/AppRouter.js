import React from 'react';
import { Router, Link, Route, Switch, NavLink, hashHistory } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import AuthGuard from '../components/auth/authGuard';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Users from '../components/Users';
import AddUser from '../components/AddUser'

export const history = createHistory();


const AppRouter = () => (
 <Router history={history}>
     <div>
	     <Header/>
	     <Switch>
	       <Route path="/" component={AuthGuard(Users)}  exact = {true}/>
	       <Route path="/user-create" component={AuthGuard(AddUser)}/>
	       <Route path='/signup' component={SignUp} />
	       <Route path='/signin' component={SignIn} />
	       <Route path='/signout' component={SignIn} />
	       <Route component={NotFound}/>

	     </Switch>
	  </div>
   </Router>

);

export default AppRouter;