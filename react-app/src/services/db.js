import Dexie from 'dexie';

const db = new Dexie('AllCourses');
db.version(1).stores({
	courses: '++id, courseId, groupId, depId',
	departments: '++id, depId',
	userInfo:'++id, name, lastName, stdId, major',
});

export default db;
