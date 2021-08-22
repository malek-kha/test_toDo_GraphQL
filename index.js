const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphQL/schema')
const {ToDoList} = require('./graphQL/resolvers')


const server = new ApolloServer({
    typeDefs,
    ToDoList,
  })


  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });  