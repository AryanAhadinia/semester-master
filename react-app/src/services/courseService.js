import http from './httpService';

const apiUrl = 'something';

export function getAllCourses() {
	return http.get(apiUrl + '/schedule/all_courses');
}
