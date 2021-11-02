exports.Query = {
	example: (parent, args, context) => "Example",
	parts: (parent, { filter }, { db }) => {
		let filteredParts = db.parts;
		if (filter) {
			const { criticalPart, avgRating } = filter;
			if (criticalPart) {
				filteredParts = filteredParts.filter((part) => {
					return part.criticalPart;
				});
			}

			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredParts = filteredParts.filter((part) => {
					let sumRatings = 0;
					let numReviews = 0;
					db.fieldReviews.forEach((fieldReview) => {
						if (fieldReview.partId === part.id) {
							sumRatings += fieldReview.rating;
							numReviews++;
						}
					});
					const avePartRating = sumRatings / numReviews;
					return avePartRating >= avgRating;
				});
			}
		}
		return filteredParts;
	},
	part: (parent, { id }, { db }) => {
		return db.parts.find((part) => part.id === id);
	},
	categories: (parent, args, { db }) => db.categories,
	category: (parent, { id }, { db }) => {
		return db.categories.find((category) => category.id === id);
	},
};
