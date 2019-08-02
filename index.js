import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolver';

console.log('hello!');

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers: resolvers,
});

server.start( () => console.log('Graphql Server Running'))