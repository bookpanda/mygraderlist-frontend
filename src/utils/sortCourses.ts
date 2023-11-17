import { ICourses } from '@/types/course';

export const sortCourses = (courses: ICourses | null) => {
    courses?.sort((a, b) => {
        if (a.courseCode < b.courseCode) {
            return -1;
        }
        if (a.courseCode > b.courseCode) {
            return 1;
        }
        return 0;
    });
    courses?.sort((a, b) => {
        return a.courseCode == 'liked' ? -1 : b.courseCode == 'liked' ? 1 : 0;
    });
};
