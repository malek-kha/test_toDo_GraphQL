const { gql } = require('apollo-server')

const typeDefs = gql`
    type ToDo {
        id: Int!
        name: String!
    }

    type ToDoList {
        id: Int!
        title: String!
        ToDo: [ToDo]!
    }

    type Query {
        ToDoList(title:String!): ToDoList
        AllToDoList: [ToDoList!]!
    }

    type Mutation {
        createToDo(name: String!): ToDo!
        deleteToDo(id: Int!): ToDoList    
    }

`
module.exports = typeDefs;