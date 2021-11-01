exports.Part = {
	category: ({ categoryId }, args, { categories }) => {
		return categories.find((category) => category.id === categoryId);
	},
	fieldReview: ({ id }, args, { fieldReviews }) => {
		return fieldReviews.filter((fieldReview) => fieldReview.partId === id);
	},
};
