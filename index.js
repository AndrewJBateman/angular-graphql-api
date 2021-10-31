const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Part } = require("./resolvers/Part");
const { db } = require("./db");

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Category,
		Part,
	},
	context: {
		db
	},
});

server.listen().then(({ url }) => {
	console.log("Server is ready at " + url);
});
