const { v4: uuid } = require("uuid");
const { Category } = require("./Category");

exports.Mutation = {
	addCategory: (parent, { input }, { db }) => {
		const { name } = input;

		const newCategory = {
			id: uuid(),
			name,
		};

		db.categories.push(newCategory);

		return newCategory;
	},
	addPart: (parent, { input }, { db }) => {
		const { name, image, weight, criticalPart, quantity, categoryId } = input;

		const newPart = {
			id: uuid(),
			name,
			image,
			weight,
			criticalPart,
			quantity,
			categoryId,
		};

		db.parts.push(newPart);
		return newPart;
	},
	addFieldReview: (parent, { input }, { db }) => {
		const { date, title, comment, rating, partId } = input;

		const newFieldReview = {
			id: uuid(),
			date,
			title,
			comment,
			rating,
			partId,
		};

		db.fieldReviews.push(newFieldReview);

		return newFieldReview;
	},
	deleteCategory: (parent, { id }, { db }) => {
		db.categories = db.categories.filter((category) => category.id !== id);
		db.parts = db.parts.map((part) => {
			if (part.partId === id)
				return {
					...part,
					category: null,
				};
			else return part;
		});
		return true;
	},
	deletePart: (parent, { id }, { db }) => {
		db.parts = db.parts.filter((part) => part.id !== id);
		db.fieldReviews = db.fieldReviews.filter(
			(fieldReview) => fieldReview.partId !== id
		);
		return true;
	},
	deleteFieldReview: (parent, { id }, { db }) => {
		db.fieldReviews = db.fieldReviews.filter(
			(fieldReview) => fieldReview.id !== id
		);
		return true;
	},
	updateCategory: (parent, { id, input }, { db }) => {
		const index = db.categories.findIndex((category) => category.id === id);
		if (index === -1) return null;
		db.categories[index] = {
			...db.categories[index],
			...input,
		};
		return db.categories[index];
	},
	updatePart: (parent, { id, input }, { db }) => {
		const index = db.parts.findIndex((part) => part.id === id);
		if (index === -1) return null;
		db.parts[index] = {
			...db.parts[index],
			...input,
		};
		return db.parts[index];
	},
	updateFieldReview: (parent, { id, input }, { db }) => {
		const index = db.fieldReviews.findIndex((fieldReview) => fieldReview.id === id);
		db.fieldReviews[index] = {
			...db.fieldReviews[index],
			...input,
		};
		return db.fieldReviews[index];
	},
};
