exports.Part = {
	category: ({ categoryId }, args, { db }) => {
		return db.categories.find((category) => category.id === categoryId);
	},
	fieldReviews: ({ id }, args, { db }) => {
		return db.fieldReviews.filter((fieldReview) => fieldReview.partId === id);
	},
};
