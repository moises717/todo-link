import customFetch from '../utils/customFetch';
import {getUniqueId} from '../utils/uuid';

export const createTodo = async ({data}) => {
	const newData = {...data, userId: getUniqueId()};

	const request = await customFetch('/api/todo', {
		options: {
			method: 'POST',
			body: JSON.stringify(newData),
		},
	});

	return request;
};

export const getTodos = async ({userId}) => {
	const request = await customFetch(`/api/todo/${userId}`, {
		options: {
			method: 'GET',
		},
	});

	return request;
};

export const updateTodo = async ({id, data}) => {
	const request = await customFetch(`/api/todo/${id}`, {
		options: {
			method: 'PUT',
			body: JSON.stringify(data),
		},
	});

	return request;
};

export const deleteTodo = async (id) => {
	try {
		const request = await customFetch(`/api/todo/${id}`, {
			options: {
				method: 'DELETE',
			},
		});
		return request;
	} catch (error) {
		return error;
	}
};
