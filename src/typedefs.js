import { gql } from "apollo-server-express";


export const typeDefs = gql`
    type Query{
        hello : String!,
        cats : [Cat]
    }

    type Cat{
        id : String,
        name : String
    }

    type Mutation{
        createCat(name : String!) : Cat!,
        deleteCat(id : String!) : Boolean
        deleteAllDocuments : Boolean
    }
`
