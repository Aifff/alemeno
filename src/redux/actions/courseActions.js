export const enrollCourse = course => {
  return {
    type: 'ENROLL_COURSE',
    payload: course,
  };
};
  
export const markCourseCompleted = courseId => {
  return {
    type: 'MARK_COURSE_COMPLETED',
    payload: courseId,
  };
};