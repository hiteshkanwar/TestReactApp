import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { hashHistory } from 'react-router'
// import { withRouter } from 'react-router'

export default function (ComposedComponent) {



    class Authentication extends Component {

        // constructor( context) {
        //   super(context);
        //   this.state = {
        //     admin: 'false'
        //   }
        //   this.setState({
        //     admin: localStorage.getItem('admin')
        //   })
        // }
       
        //check correct context types for this to work
        // static contextTypes =  {
        //     router: React.PropTypes.object
        // }


        //if authenticated == false redirect to '/signin'
        componentWillMount() {
            if (!this.props.authenticated) {
                console.log('route',this.context)
               this.context.router.history.push('/signin')
            }
        }


        //if any props updated check if we are still authenticated
        //if not redirect to '/' again
        componentWillUpdate(nextProps, nextState) {
            if (!nextProps.authenticated) {
               this.context.router.history.push('/signin')
            }
        }

        //render the passed component and its props
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    // Authentication.contextTypes = {
    //   router: React.PropTypes.object.isRequired
    // };

    Authentication.contextTypes = {
     router: React.PropTypes.object.isRequired
    }

    //connect to store to map props
    function mapStateToProps(state) {
     
        return { 
            authenticated: state.auth.authenticated,
            admin: state.admin

        }
    }

    //higher order function returned
    return connect(mapStateToProps)(Authentication)
}
