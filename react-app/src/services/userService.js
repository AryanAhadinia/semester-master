import http from './httpService';
import db from './db';

const apiUrl = 'http://b5e506d059a4.ngrok.io/api';

export function getAllDepartments() {
	return http.get(apiUrl + '/user/info');
}

export function populateUserOnDb(info) {
    db.userInfo.add({ ...info });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllDepartments,
	populateDepartmentsOnDb,
};
