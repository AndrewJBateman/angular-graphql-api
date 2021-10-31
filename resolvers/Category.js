exports.Category = {
	parts: ({id: categoryId}, args, {parts}) => {
		return parts.filter((part) => part.categoryId === categoryId);
	},
};
