import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import { bindActionCreators } from 'redux';
import signoutUser from '../actions/signoutUser';
  

class Header extends React.Component {

  componentWillMount() {
    this.props.fetchData();
  }

  signoutUser(){
    this.props.signoutUser();
  }

  renderLinks() {
    console.log(this.props)
   	 if (this.props.authenticated) {
        // show a link to sign out
        if (this.props.admin){
          return [
            <div>
              <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>

               <NavLink to="/user-create" activeClassName="is-active" > Create User</NavLink>
               
              <NavLink to="/signout" onClick={this.signoutUser.bind(this)}> Sign Out</NavLink>
            </div>
          ];
        }
        else{
          return [
            <div>    
              <NavLink to="/signout" onClick={this.signoutUser.bind(this)}> Sign Out</NavLink>
            </div>
            ];
        }
      
     } 
     else {
       return [
         <div>
          <NavLink to="/signin" activeClassName="is-active">Sign In</NavLink>
          <NavLink to="/signup" activeClassName="is-active">Sign Up</NavLink>
         </div>
         ];
        }

   }

  render() {
    return (
      <div>
        {this.renderLinks()}  
      </div>
    );
  }
}




function mapStateToProps(state){
  return { 
    authenticated : state.auth.authenticated,
    admin: state.auth.admin
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData,
    signoutUser: signoutUser
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

