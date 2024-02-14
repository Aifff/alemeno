import React from 'react';

import { useDispatch } from 'react-redux';
import { markCourseCompleted } from '../redux/actions/courseActions';

const Dashboard = ({ enrolledCourses }) => {
  const dispatch = useDispatch();


  const handleMarkCompleted = (courseId) => {
    console.log(courseId);
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div className="dashboard">
      <h2>My Enrolled Courses</h2>
      <ul style={{border:"2px solid black", borderRadius:"25px", width: "fit-content", padding:"25px"}}>
        
        {enrolledCourses.map(course => (
          <li style={{border:"1px solid blue", borderRadius:"40px", padding:"15px", margin:"15px"}} key={course.id}>
            {course.name} - {course.instructor}

            <p>Mark as completed:</p>
            <input
              type="checkbox"
              checked={course.completed}
              onClick={() => handleMarkCompleted(course.id)}
            />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
