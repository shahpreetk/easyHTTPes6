const http = new EasyHTTP;

// GET USERS
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// USER DATA
const data={
    name:'John Doe',
    username:'johndoe',
    email:'jdoe@gmail.com'
}

// CREATE POST
http.post('https://jsonplaceholder.typicode.com/users',data)
    .then(data => console.log(data))
    .catch(err => console.log(err));