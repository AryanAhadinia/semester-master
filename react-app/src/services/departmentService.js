import http from './httpService';
import db from './db';

const apiUrl = 'http://localhost:8082/api';

export function getAllDepartments() {
	return http.get(apiUrl + '/schedule/departments');
}

export function populateDepartmentsOnDb(departments) {
	db.departments.bulkAdd(departments);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllDepartments,
	populateDepartmentsOnDb,
};
