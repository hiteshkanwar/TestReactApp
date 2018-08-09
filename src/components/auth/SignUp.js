import React, { Component } from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import signupUser from '../../actions/signupUser';
import { bindActionCreators } from 'redux';
import {required, email,  minLength, validate} from '../../services/validation';




// renders form fields
// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div className="form-group">
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={`Enter your ${label}`} type={type} className="form-control" />
//       {touched && ((error  && <span id="error">{error}</span>) || (warning && <span id="warning">{warning}</span>))}
//     </div>
//   </div>
// );



class Signup extends Component {

 constructor(props){
    super(props)
    this.state = {
      email : '',
      password:  '',
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
    //this.props.signupUser(email, password);
    this.props.signupUser(email, password);
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


  render() {
    const { handleSubmit,  dirty, invalid } = this.props;
    return (

      <form id="signup" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.alertMessage()}
         <div>
          <label>Email</label>
          <div>
          <input type="text" name="email" value={this.state.email} 
            onChange = {this.onEmailChange} 
            validate={[email, required]}
            className='add-option-input'/>
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
          <input type="password" name="password" value={this.state.password} 
            onChange = {this.onPasswordChange} 
            validate={[required, minLength(3)]}
            className='add-option-input'
          />
         </div>
        </div>
        <button action="submit" disabled={dirty && invalid ? true : false} className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signupUser,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup',
  validate
})(Signup));





 