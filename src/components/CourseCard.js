import React from 'react';

const CourseCard = ({ course }) => {

  return (
    <div className="course-card">
      <div className="course-info">
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration} </p>

      </div>
    </div>
  );
};

export default CourseCard;
