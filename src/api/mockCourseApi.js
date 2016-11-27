import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "Live-Chalkboard",
    title: "A board for doodling in real-time",
    watchHref: "http://www.livechalkboard.tk/",
    authorId: "dani-akash",
    length: "5:08",
    category: "Socket"
  },
  {
    id: "Library",
    title: "A sample library app with Nodejs",
    watchHref: "Project discontinued",
    authorId: "dani-akash",
    length: "3:10",
    category: "Nodejs"
  },
  {
    id: "Admin-Panel",
    title: "Admin Panel using React and Flux",
    watchHref: "http://www.adminpanelwithreact.cf/",
    authorId: "dani-akash",
    length: "2:52",
    category: "React"
  },
  {
    id: "React-Development-Environment",
    title: "A fully automated development Environment for React and Flux (in ES5)",
    watchHref: "Project discontinued",
    authorId: "dani-akash",
    length: "2:30",
    category: "React"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `https://www.github.com/daniakash/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;