import type { INewAppRequest } from '../../store/application/types';

import { request } from './utils';

export const getApplications = () => {
	return request('/showcase/project-applications/', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
		},
	});
};

export const newApplication = (data: INewAppRequest) => {
	return request('/showcase/project-applications/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
		},
		body: JSON.stringify(data),
	});
};
