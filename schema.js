const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		parts(filter: PartsFilterInput): [Part!]!
		part(id: ID!): Part
		categories: [Category!]!
		category(id: ID): Category
	}

	type Mutation {
		addCategory(input: AddCategoryInput!): Category!
		addPart(input: AddPartInput!): Part!
		addFieldReview(input: AddFieldReviewInput!): FieldReview!
		deleteCategory(id: ID!): Boolean!
		deletePart(id: ID!): Boolean!
		deleteFieldReview(id: ID!): Boolean!
		updateCategory(id: ID!, input: UpdateCategoryInput!): Category
		updatePart(id: ID!, input: UpdatePartInput!): Part
		updateFieldReview(id: ID!, input: UpdateFieldReviewInput!): FieldReview
	}

	type Part {
		id: ID!
		name: String!
		description: String!
		quantity: Int!
		image: String!
		weight: Float!
		criticalPart: Boolean!
		category: Category!
		fieldReviews: [FieldReview!]!
	}

	type Category {
		id: ID!
		name: String!
		parts(filter: PartsFilterInput): [Part!]!
	}

	type FieldReview {
		id: ID!
		date: String!
		title: String!
		comment: String!
		rating: Int!
	}

	input PartsFilterInput {
		criticalPart: Boolean
		avgRating: Int
	}

	input AddCategoryInput {
		name: String!
	}

	input UpdateCategoryInput {
		name: String!
	}

	input AddPartInput {
		name: String!
		description: String!
		quantity: Int!
		image: String!
		weight: Float!
		criticalPart: Boolean!
		categoryId: String
	}

	input UpdatePartInput {
		name: String!
		description: String!
		quantity: Int!
		image: String!
		weight: Float!
		criticalPart: Boolean!
		categoryId: String
	}

	input AddFieldReviewInput {
		date: String!
		title: String!
		comment: String!
		rating: Int!
		partId: ID!
	}

	input UpdateFieldReviewInput {
		date: String!
		title: String!
		comment: String!
		rating: Int!
		partId: ID!
	}
`;
