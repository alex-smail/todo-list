import config from '../config.json';
import { TODOS_URL } from '../constants';

const TODOS_ENDPOINT = `${config.BASE_URL}/${TODOS_URL}`;

export const todosAPI = {
	readAll: async () => {
		const response = await fetch(TODOS_ENDPOINT);
		return await response.json();
	},
	create: async (value) => {
		const response = await fetch(TODOS_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value.trim(),
				id: Date.now(),
			}),
		});
		return await response.json();
	},
	update: async (value, id) => {
		const response = await fetch(`${TODOS_ENDPOINT}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value.trim(),
				id: id,
			}),
		});
		return await response.json();
	},
	delete: async (id) => {
		const response = await fetch(`${TODOS_ENDPOINT}/${id}`, {
			method: 'DELETE',
		});
		return await response.json();
	},
};
