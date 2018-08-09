import React from 'react';
import { withRouter } from 'react-router'


 class UserForm  extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.state = {
      email :  props.user ? props.user.email : '',
      password:  props.user ? props.user.password : ''
    }
  }

  onTitleChange = (e) => {
    const email =  e.target.value;
    this.setState(() => ({ email }));
  }

  onDescriptionChange = (e) => {
    const password =  e.target.value;
    this.setState(() => ({ password }));
  }

  handleSubmit(e)  {
     e.preventDefault();
     if ( !this.state.email || ! this.state.password ){
       this.setState(() => ({ error: 'Please enter email and password' }));
     }
     else{

      this.props.onSubmit({
        email: this.state.email,
        password: this.state.password
      })
      this.props.history.push('/')
     }


  }

 
  render(){
   
     return(
      <div>
       { this.state.error && <p>{this.state.error}</p>}
       <form className='add-option' onSubmit={this.handleSubmit}>
           <label>Email:</label>
           <input type="email" name="email" value={this.state.email} onChange = {this.onTitleChange} className='add-option-input'/>
           <label>Password:</label>
           <br />
           <input type="password" name="password" value={this.state.password} onChange = {this.onDescriptionChange} className='add-option-input'/>
          
           
           <button className='button'>ADD USER</button> 
         </form>
         </div>
       
      );
    }

 }

export default withRouter(UserForm);
