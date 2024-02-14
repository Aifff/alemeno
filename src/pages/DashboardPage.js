import React from 'react';
import Dashboard from '../components/Dashboard';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const enrolledCourses = useSelector(state => state.enrolledCourses);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <Dashboard enrolledCourses={enrolledCourses}/>
    </div>
  );
};

export default DashboardPage;
