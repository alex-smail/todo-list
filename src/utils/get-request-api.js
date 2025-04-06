export const getRequestAPI = (url, method, title, id) =>
	fetch(url, {
		method: method,
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: title.trim(),
			id: id,
		}),
	});
