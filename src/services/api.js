export const searchCourses = async searchTerm => {
  const coursesData = [
    {
      id: 1,
      name: 'Introduction to HTML',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Close',
      thumbnail: 'your.image.here',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus:[
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'},
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'},
      ],
    },

    {
      id: 2,
      name: 'Introduction to React-Native',
      instructor: 'Chris',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '4 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus:[
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'},
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'},
      ],
    },

    {
      id: 3,
      name: 'Introduction to React',
      instructor: 'Thomas',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Close',
      thumbnail: 'your.image.here',
      duration: '6 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus:[
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'},
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'},
      ],
    },

    {
      "id": 4,
      "name": "Advanced Python Programming",
      "instructor": "Emily",
      "description": "Take your Python skills to the next level with advanced topics and projects.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "10 weeks",
      "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      "location": "Online",
      "prerequisites": ["Intermediate Python knowledge", "Understanding of object-oriented programming"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Advanced Data Structures",
          "content": "Explore advanced data structures like trees, graphs, and heaps."
        },
        {
          "week": 2,
          "topic": "Concurrency in Python",
          "content": "Learn about concurrent programming using threads and processes in Python."
        },
      ]
    },

    {
      "id": 5,
      "name": "Web Development Bootcamp",
      "instructor": "Alex",
      "description": "Comprehensive training program covering front-end and back-end web development.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "12 weeks",
      "schedule": "Tuesdays, Thursdays, and Saturdays, 10:00 AM - 12:00 PM",
      "location": "Online",
      "prerequisites": ["Basic HTML, CSS, and JavaScript knowledge"],
      "syllabus": [
        {
          "week": 1,
          "topic": "HTML and CSS Basics",
          "content": "Fundamentals of HTML and CSS, creating static web pages."
        },
        {
          "week": 2,
          "topic": "JavaScript Fundamentals",
          "content": "Introduction to JavaScript, variables, data types, and control structures."
        },
      ],
    },

    {
      "id": 6,
      "name": "Machine Learning Fundamentals",
      "instructor": "Jessica",
      "description": "An introductory course to machine learning algorithms and techniques.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "10 weeks",
      "schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      "location": "Online",
      "prerequisites": ["Basic knowledge of linear algebra", "Understanding of probability theory"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to Machine Learning",
          "content": "Overview of machine learning concepts and types of machine learning algorithms."
        },
        {
          "week": 2,
          "topic": "Linear Regression",
          "content": "Understanding linear regression, gradient descent, and model evaluation."
        },
      ],
    },
    
    


  ];

  if (!searchTerm) {
    return coursesData;
  }

  // Filter courses based on search term that is the course teacher name and the course-name
  return coursesData.filter(
    course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
