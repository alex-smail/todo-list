export const trimText = (text) =>
	text.length >= 70 ? text.slice(0, 70) + '...' : text;
