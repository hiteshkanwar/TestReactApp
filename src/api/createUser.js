class CreateUserApi {  
   static create(user) {
     const userData = JSON.stringify(user) 
    const request = new Request(`http://localhost:3000/users/create`, 
    {
      method: 'POST',
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

export default CreateUserApi;  