const axios = require('axios');

const ToDoList = axios({
    url: 'http://localhost:3000/todoList',
    method: 'get',
    data: {
     query: `
     {
        AllToDoList{
            id
            title
            ToDo {
              id
              name
            }
        }
     }
     `
    }
}).then(res => {
    console.log(res.data);
    return res.data;
}).catch(err => {
    console.log('aaaaaaaaa')
    console.log(err.message);
});


/*const FindOrCreate = axios({
    url: 'http://localhost:3000/todoList/find_create',
    method: 'get',
    data: {
     query: `
     {
        ToDoList($title: String!){
            id
            title
            ToDo {
              id
              name
            }
        }
     }
     `
    },
    variables: {
        title: "malek",
    }
}).then(res => {
     console.log(res.data);
     return res.data;
}).catch(err => {
    console.log('aaaaaaaaa')
    console.log(err.message);
});*/
module.exports = {ToDoList};