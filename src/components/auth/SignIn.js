import React, { Component } from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import signinUser from '../../actions/signIn';
import getUser from '../../actions/users';
import { bindActionCreators } from 'redux';
import {required, email,  minLength, validate} from '../../services/validation';


class Signin extends Component {

  constructor(props){
    super(props)
    this.state = {
      email : '',
      password:  ''
    }
  }

  onEmailChange = (e) => {
    const email =  e.target.value;
    this.setState(() => ({ email }));
  }

  onPasswordChange = (e) => {
    const password =  e.target.value;
    this.setState(() => ({ password }));
  }

  handleFormSubmit({email = this.state.email, password = this.state.password }) {   
    this.props.signinUser(email, password);
    this.props.reset();
  }


  // error message alert from server
  alertMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }


  render(){
  	const {  onChange, handleSubmit,  dirty, invalid } = this.props;

    return (
      <form id="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              {this.alertMessage()}
        <div>
          <label>Email</label>
          <div>
            <input name="email" component="input" type="email" 
              value={this.state.email} 
              onChange = {this.onEmailChange.bind(this)} 
              validate={[email, required]}
              placeholder="Email"
              />
          </div>
        </div>
         <div>
          <label>Password</label>
          <div>
            <input name="password" component="input" type="password" 
              value={this.state.password} 
              onChange = {this.onPasswordChange.bind(this)} 
              validate={[required, minLength(3)]}
              className='add-option-input'
              placeholder="Password" 
              />
          </div>
        </div>
        <div>
           <button action="submit" disabled={dirty && invalid ? true : false} className="btn btn-primary">Sign In</button>
        </div>
      </form>
    );
  }

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signinUser,
    getUser,

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signin',
  validate
})(Signin));
