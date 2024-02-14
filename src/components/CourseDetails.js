import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details">
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration} </p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.map((prerequisite, index) => (
        <li key={index}>{prerequisite}</li>))}
      </p>
      <p>Syllabus: {course.syllabus.map(item => (
        <li key={item.week}><strong>Week {item.week}:</strong> {item.topic} - {item.content}</li>))}
      </p>
    </div>
  );
};

export default CourseDetails;
