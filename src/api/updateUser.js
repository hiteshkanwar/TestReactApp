class UpdateUserApi {  
   static update(user) {
     const userData = JSON.stringify(user) 
    const request = new Request(`http://localhost:3000/users?id=${user.id}`, 
    {
      method: 'post',
      body: userData,
      headers: {
        "Content-Type": "application/json; charset=utf-8", 
      },   
    }
    );
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UpdateUserApi;  