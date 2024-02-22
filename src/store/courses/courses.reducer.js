import { GET_ALL_COURSES } from "./courses.types";

const initialState = {
  allCourses: [],
};

export const coursesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES: {
      return {
        ...state,
        allCourses: [...payload],
      };
    }
    default: {
      return state;
    }
  }
};
