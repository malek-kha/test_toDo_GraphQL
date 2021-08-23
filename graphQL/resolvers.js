const axios = require('axios');

//get all todo list
const ToDoList = axios({
    url: 'http://localhost:5000/todoList',
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
    console.log('error')
    console.log(err.message);
});

//find or create todo list
const FindOrCreate = axios({
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
}).then(res => {
     console.log(res.data);
     return res.data;
}).catch(err => {
    console.log('error')
    console.log(err.message);
});

// create todo
const CreateToDo = axios({
    url: 'http://localhost:3000/todoList/todo/create',
    method: 'post',
    data: {
     query: `
     mutation AddToDO($name: String!) {
         createToDo(
             name: $name
         ) {
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
}).then(res => {
     console.log(res.data);
     return res.data;
}).catch(err => {
    console.log('error')
    console.log(err.message);
});

// delete todo
const DeleteToDo = axios({
    url: 'http://localhost:3000/todoList/todo/delete',
    method: 'post',
    data: {
     query: `
     mutation deleteToDO($id: ID!) {
         deleteToDO(id: $id) {
             id
         }
     }
     `
    },
}).then(res => {
     console.log(res.data);
     return res.data;
}).catch(err => {
    console.log('error')
    console.log(err.message);
});
module.exports = {ToDoList,FindOrCreate, CreateToDo, DeleteToDo};