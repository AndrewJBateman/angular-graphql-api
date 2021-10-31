const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		example: String
		parts: [Part!]!
		part(id: ID!): Part
		categories: [Category!]!
		category(id: ID): Category
	}

	type Part {
		id: ID!
		name: String!
		description: String!
		image: String!
		quantity: Int!
		weight: Float!
		criticalPart: Boolean
		category: Category
	}

	type Category {
		id: ID!
		name: String!
		parts: [Part!]!
	}
`;
