import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../actions/users';


class UserListItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
     showForm: false,
     id: this.props.user ? this.props.user.id : "",
     email: this.props.user ? this.props.user.email : "",
     password: this.props.user ? this.props.user.password : ""
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
 
  toggleForm(){
    
    this.setState({
      showForm: !this.state.showForm
    })
  }

  onEmailChange = (e) => {
    const email =  e.target.value;
    this.setState(() => ({ email }));
  }

  onPasswordChange = (e) => {
    const password =  e.target.value;
    this.setState(() => ({ password }));
  }

  updateUser() {
    const obj = {id: this.state.id, email: this.state.email, password: this.state.password}
    this.props.updateUser(obj)
    debugger
    // this.props.history.push('/')
  }

  componentWillReceiveProps(){
    this.setState({showForm: false})
  }

  

  render(){
    debugger
 return (
      <li>
        <div style={{display: this.state.showForm ? 'none' : 'block'}}>
          Email: {this.props.user.email}-------Password: {this.props.user.password}
         
         <button onClick={this.toggleForm}
         >Edit</button>
         <button onClick={(e)=>{
           this.props.dispatch(removeUser(this.props.user));
         }}
         >Remove</button>
       </div>
        <div style={{display: !this.state.showForm ? 'none' : 'block' }}>
        <label> Email</label>
        <input type='email' value={this.state.email} name='email' onChange={this.onEmailChange} />
        <label> Password</label>
        <input type='password' name='password' value={this.state.password} onChange={this.onPasswordChange} />

        <button onClick={this.updateUser}
         >Update</button>
         <button onClick={this.toggleForm}
         >cancel</button>
       </div>
      </li>
    );
  }
}



export default connect()(UserListItem);

