import http from './httpService';
import db from './db';

const apiUrl = 'http://086685af1fe9.ngrok.io/api';

export function getAllDepartments() {
	return http.get(apiUrl + '/schedule/all_departments');
}

export function populateDepartmentsOnDb(departments) {
	for (let key in departments) {
		db.departments.add({
			depId: key,
			department: departments[key],
		});
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllDepartments,
	populateDepartmentsOnDb,
};
