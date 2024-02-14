import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetails from '../components/CourseDetails';
import courseModel from '../sampleCourseModel';


import { useDispatch } from 'react-redux';
import { enrollCourse, markCourseCompleted } from '../redux/actions/courseActions';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courseModel.find(course => course.id === parseInt(courseId));

  const dispatch = useDispatch();
  const handleEnrollCourse = (course) => {
    console.log(course);
    dispatch(enrollCourse(course));
  };

  return (
    <div>
      <h1>Course Details</h1>
      <button onClick={() => handleEnrollCourse(course)}>Enroll Now</button>
      
      <CourseDetails course={course} />
    </div>
  );
};

export default CourseDetailsPage;
