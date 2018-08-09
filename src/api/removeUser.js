class RemoveUserApi {  
   static removeUser(user) {
    const request = new Request(`http://localhost:3000/users/delete?id=${user.id}`, 
    {
      method: 'DELETE'
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default RemoveUserApi;  