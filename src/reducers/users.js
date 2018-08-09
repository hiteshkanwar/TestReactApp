const usersReducerDefaultState = [];
// users reducer
 const usersReducer = (state = usersReducerDefaultState , action) => {
  switch (action.type) {
    case 'USER_SUCCESS':
       return  action.users



    case "CREATE_USER_SUCCESS":
      return  state.concat(action.res.user)

    case "UPDATE_USER_SUCCESS":
      var newstate = state.filter(({id}) =>{
        return id !== action.res.user.id
      })
      return newstate.concat(action.res.user)
 

  	case 'REMOVE_USER_SUCCESS':
  	  return  state.filter(({id}) =>{
        return id !== action.user.id
  	  })

  	case 'EDIT_USER':	 
  	  return  state.map((user) => {
        if(user.id === action.id){
          return{
          	 ...user,
              ...action.updates
          	
          };
        }else{
        return user;
        }
  	  })
    default:
      return state;
 
  }
}

export default usersReducer;