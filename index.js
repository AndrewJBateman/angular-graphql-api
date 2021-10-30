const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		example: String
	}
`;

const resolvers = {
	Query: {
		example: () => {
			return "Example";
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log("Server is ready at " + url);
});
