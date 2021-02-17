import http from './httpService';
import db from './db';

const apiUrl = 'http://058a6a685fc8.ngrok.io/api';

export function getAllDepartments() {
	return http.get(apiUrl + '/user/info');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllDepartments,
};
