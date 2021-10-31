exports.Part = {
	category: ({categoryId}, args, {categories}) => {
		return categories.find((category) => category.id === categoryId);
	},
};
