import config from '../config.json';
import { TODOS_URL } from '../constants';
import { getRequestAPI } from '../utils/get-request-api';

const TODOS_ENDPOINT = `${config.BASE_URL}/${TODOS_URL}`;

export const todosAPI = {
	readAll: async () => {
		const response = await fetch(TODOS_ENDPOINT);
		return await response.json();
	},
	create: async (value) => {
		const response = await getRequestAPI(
			TODOS_ENDPOINT,
			'POST',
			value,
			Date.now()
		);
		return await response.json();
	},
	update: async (value, id) => {
		const response = await getRequestAPI(
			`${TODOS_ENDPOINT}/${id}`,
			'PUT',
			value,
			id
		);
		return await response.json();
	},
	delete: async (id) => {
		const response = await fetch(`${TODOS_ENDPOINT}/${id}`, {
			method: 'DELETE',
		});
		return await response.json();
	},
};
