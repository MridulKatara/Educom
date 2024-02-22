export const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
};

export const getReviewForCourse = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  console.log(foundCourse);

  return foundCourse.review === null ? 0 : foundCourse.review;
};
export const checkReviewed = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse.review !== (null || 0);
};

export const getProgress = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse.progress;
};

export const getSyllabus = (syllabus) => {
  const syllabusCopy = syllabus.map((s) => ({
    ...s,
    topics: s.topics.map((topic) => ({ title: topic, done: false })),
  }));

  console.log(syllabusCopy);
  return syllabusCopy;
};

export const getUserCourseSyllabus = (courses, courseId) => {
  const foundCourse = courses.find((course) => course.id === courseId);
  return foundCourse;
};

export const getCourseProgress = (courses, courseId) => {
  const syllabus = getUserCourseSyllabus(courses, courseId).syllabus;
  const total = syllabus.reduce((acc, week) => {
    return acc + week.topics.length;
  }, 0);
  const count = syllabus.reduce((accumulator, week) => {
    return (
      accumulator +
      week.topics.reduce((weekTotal, topic) => {
        return weekTotal + (topic.done ? 1 : 0);
      }, 0)
    );
  }, 0);

  return (count / total) * 100;
};

export const getUserReview = (courses, id) => {
  const course = courses.find((ele) => ele.id === id);
  console.log(course);
  return course.review;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
