exports.Category = {
	parts: ({ id: categoryId }, { filter }, { db }) => {
		const categoryParts = db.parts.filter(
			(part) => part.categoryId === categoryId
		);
		let filteredCategoryParts = categoryParts;

		if (filter) {
			if (filter.criticalPart === true) {
				filteredCategoryParts = filteredCategoryParts.filter((part) => {
					return part.criticalPart;
				});
			}
		}

		return filteredCategoryParts;
	},
};
