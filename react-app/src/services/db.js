import Dexie from 'dexie';

const db = new Dexie('AllCourses');
db.version(1).stores({
	courses: '++id, courseId, groupId',
});

export default db;
