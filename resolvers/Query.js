exports.Query = {
	example: (parent, args, context) => "Example",
	parts: (parent, args, { parts }) => parts,
	part: (parent, { id }, { parts }) => {
		return parts.find((part) => part.id === id);
	},
  categories: (parent, args, { categories }) => categories,
	category: (parent, { id }, { categories }) => {
		return categories.find((category) => category.id === id);
	},
};
