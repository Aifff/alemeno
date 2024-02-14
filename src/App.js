// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CourseListingPage from './pages/CourseListingPage';
// import CourseDetailsPage from './pages/CourseDetailsPage';
// import DashboardPage from './pages/DashboardPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<CourseListingPage />} />
//           <Route path="/course/:courseId" element={<CourseDetailsPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseListingPage />} />
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
