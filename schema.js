const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		example: String
		parts(filter: PartsFilterInput): [Part!]!
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
    fieldReviews: [fieldReview!]!
	}

	type Category {
		id: ID!
		name: String!
		parts: [Part!]!
	}

  type fieldReview {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input PartsFilterInput {
    criticalPart: Boolean
  }
`;
