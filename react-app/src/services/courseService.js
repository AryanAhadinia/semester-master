import http from './httpService';

const apiUrl = 'something';

export function getAllCourses() {
	return http.get(apiUrl + '/schedule/all_courses');
}

export function getMyCourses() {
	return http.get(apiUrl + '/schedule/my_selections');
}

export function addCourseToSchedule(course) {
	return http.post(apiUrl + '/schedule/select', course);
}

export function deleteCourseFromSchedule(course) {
	return http.delete(
		apiUrl + '/schedule/unselect',
		course.courseId + course.groupId
	);
}
