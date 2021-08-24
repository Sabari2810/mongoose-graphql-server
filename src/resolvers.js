import { Cat } from "./models/Cat.js";

export const resolvers = {
  Query: {
    hello: () => "Hello",
    cats: () => {
      const cats = Cat.find();
      return cats;
    },
  },

  Mutation: {
    createCat: async (_, { name }) => {
      const cat = new Cat({
        name: name,
      });
      const res = await cat.save();
      console.log("cat", res);
      return res;
    },
    deleteCat: async (_, { id }) => {
        try {
          await Cat.findByIdAndDelete(id);
          return true;
        } catch {
          return false;
        }
      },
      deleteAllDocuments : async () => {
          await Cat.remove({});
          return true;
      }
  },
};
