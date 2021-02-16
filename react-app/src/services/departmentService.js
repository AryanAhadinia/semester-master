import http from './httpService';

const apiUrl = 'something';

export function getAllDepartments() {
	return http.get(apiUrl + '/schedule/all_departments');
}
