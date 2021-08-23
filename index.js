const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphQL/schema')
const {ToDoList,FindOrCreate, CreateToDo, DeleteToDo} = require('./graphQL/resolvers')


const server = new ApolloServer({
    typeDefs,
    ToDoList,
    FindOrCreate,
    CreateToDo,
    DeleteToDo
  })


  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });  