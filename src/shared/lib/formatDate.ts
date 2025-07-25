export const getFullYear = (isoDate: string) => {
	const date = new Date(isoDate);
	return date.getFullYear();
};

export const getFullDate = (isoDate: string) => {
	const date = new Date(isoDate);
	return date.toLocaleDateString('ru-RU');
};
