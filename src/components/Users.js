import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../api/getUsers';
import { updateUser } from '../actions/users';
import UserListItem from './UserListItem';
import ReactPaginate from 'react-paginate';

const API = 'http://localhost:3000/';
const DEFAULT_QUERY = 'users/index';

class UserList extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {users: [], offset: 0 }
    this.updateUserData = this.updateUserData.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.loadUserdataFromServer = this.loadUserdataFromServer.bind(this)

    this.handleFilter = this.handleFilter.bind(this)
  }


  componentDidMount() {
    this.props.dispatch(getUsers(1,''));
  }

  handlePageClick(data){
    let selected = data.selected+1;
    let offset = Math.ceil(selected * 10);

    this.setState({offset: offset}, () => {
      this.loadUserdataFromServer(selected);
    });
  }



  handleFilter(e){
    var value = e.target.value
    this.props.dispatch(getUsers(1,value));
    
  }

  loadUserdataFromServer(selected){
    
     this.props.dispatch(getUsers(selected,''));
  }


  // componentDidMount() {
  //   this.setState({
  //     users: this.props.users
  //   })
  // }

  componentWillReceiveProps(nextProps){
    
   this.setState({
      users: nextProps.users
    })
  }


  updateUserData(user){
    this.props.dispatch(updateUser(user));
  }


render(){

 return (
     <div>
       <h2>User Lists</h2>
       <div>
         <h6>Filter:</h6>
         <input type="text" name='filter' onChange={this.handleFilter} placeholder="Search by email"/>
       </div>


       { this.state.users &&
          this.state.users.map((user) => {
           return <UserListItem updateUser={this.updateUserData} key= {user.id} user={user}/>
         })
       }
      <ReactPaginate previousLabel={"previous"}
         nextLabel={"next"}
         breakLabel={<a href="">...</a>}
         breakClassName={"break-me"}
         pageCount={3}
         marginPagesDisplayed={1}
         pageRangeDisplayed={5}
         onPageChange={this.handlePageClick}
         containerClassName={"pagination"}
         subContainerClassName={"pages pagination"}
         activeClassName={"active"} />
     </div>
  );
 }
}


const mapStateToProps = (state) => {

  return{
   'users': state.users
  };
}


export default connect(mapStateToProps)(UserList)
