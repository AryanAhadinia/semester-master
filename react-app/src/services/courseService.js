import http from './httpService';
import db from './db';

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

export function populateCoursesOnDb(courses) {
	courses.forEach((value, key) => {
		for (const course in value) {
			db.courses.add({ ...course, depId: key });
		}
	});
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllCourses,
	getMyCourses,
	addCourseToSchedule,
	deleteCourseFromSchedule,
	populateCoursesOnDb,
};
