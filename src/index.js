import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "../resolvers.js";
import { typeDefs } from "../typedefs.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import mongoose from 'mongoose';

const startApolloServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  await mongoose.connect("mongodb-url", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  });

  app.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
};

startApolloServer();
