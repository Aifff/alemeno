import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import { searchCourses } from '../services/api';
import { Link } from 'react-router-dom';

import CourseCard from '../components/CourseCard';


import { useDispatch } from 'react-redux';
import { enrollCourse, markCourseCompleted } from '../redux/actions/courseActions';


const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      const coursesData = await searchCourses(searchTerm);
      setCourses(coursesData);
    }
    fetchCourses();
  }, [searchTerm]);

  const handleSearch = term => {
    setSearchTerm(term);
  };





  // for butons to enroolll
  const dispatch = useDispatch();
  
  const handleEnrollCourse = (course) => {
    console.log(course);
    dispatch(enrollCourse(course));
  };

  const handleMarkCompleted = (courseId) => {
    console.log(courseId);
    dispatch(markCourseCompleted(courseId));
  };
  //for buttons to enrollll

  return (
    <div style={{display: "flex", flexDirection:"column", alignContent: "center", justifyContent:"center" ,flexWrap:"wrap", gap:"10px"}}>
      <h1 style={{textAlign:"center", fontSize:"45px"}}>Course Listing</h1>
      <p>Explore our courses and find the right fit for you!!!</p>

      <Link style={{textAlign:"center"}} to="./Dashboard">
        <button style={{borderRadius:"25px", background:"purple", color:"white", height:"50px", width:"150px", fontSize:"15px", cursor:"pointer"}} className='btn-primary'>Go to Dashboard</button>
      </Link>

      <input
        style={{width:"320px",height:"20px", textAlign:"center", borderRadius:"25px"}}
        type="text"
        placeholder="Search by course name or instructor"
        onChange={e => handleSearch(e.target.value)}
      />

      {courses.map(course =>(
        <div style={{border:"3px solid black", borderRadius:"45px", textAlign:"center", padding:"10px" }}>
          <Link to={`/course/${course.id}`} key={course.id}>

            <CourseCard key={course.id} course={course} />
          </Link>

          <button style={{borderRadius:"15px", cursor:"pointer", background:"blue", color:"white", height:"30px", width:"120px"}} onClick={() => handleEnrollCourse(course)}>Enroll Now</button>
          <button style={{borderRadius:"15px", cursor:"pointer", background:"blue", color:"white", height:"30px", width:"170px"}} onClick={() => handleMarkCompleted(course.id)}>Mark as Completed</button>

        </div>

      ))}

    </div>
  );
};

export default CourseListingPage;




















































// // new with clickables
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import CourseList from '../components/CourseList';
// import { searchCourses } from '../services/api'; // Import API function to fetch courses

// const CourseListingPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch courses when component mounts
//     async function fetchCourses() {
//       const coursesData = await searchCourses(searchTerm);
//       setCourses(coursesData);
//     }
//     fetchCourses();
//   }, [searchTerm]);

//   const handleSearch = term => {
//     setSearchTerm(term);
//   };

//   return (
//     <div>
//       <h1>Course Listing</h1>
//       <input
//         type="text"
//         placeholder="Search by course name or instructor"
//         onChange={e => handleSearch(e.target.value)}
//       />
//       <CourseList>
//         {courses.map(course => (
//           <Link to={`/course/${course.id}`} key={course.id}>
//             <div className="course-card">
//               <h2>{course.name}</h2>
//               <p>Instructor: {course.instructor}</p>
//               <p>Description: {course.description}</p>
//               {/* Add other course information here if needed */}
//             </div>
//           </Link>
//         ))}
//       </CourseList>
//     </div>
//   );
// };

// export default CourseListingPage;
