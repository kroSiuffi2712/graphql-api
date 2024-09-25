import { typeDefs } from "./graphql/typeDefts.js";
import { resolves } from "./graphql/resolvers.js";
import { StarApolloServer } from "./app.js";
import { connectDB } from "./db.js";

connectDB();

StarApolloServer(typeDefs, resolves);
