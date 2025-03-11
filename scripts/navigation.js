// Button event listeners
document.querySelector('.show-all').addEventListener('click', () => {
  displayCourses(courses);
});

document.querySelector('.show-wdd').addEventListener('click', () => {
  const wddCourses = courses.filter((course) => course.subject === 'WDD');
  displayCourses(wddCourses);
});

document.querySelector('.show-cse').addEventListener('click', () => {
  const cseCourses = courses.filter((course) => course.subject === 'CSE');
  displayCourses(cseCourses);
});
