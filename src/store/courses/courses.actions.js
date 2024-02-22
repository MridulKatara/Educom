import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { createAction } from "../utils";
import { GET_ALL_COURSES } from "./courses.types";

export const getAllCourses = () => async (dispatch) => {
  try {
    const coursesSnapshot = await getDocs(collection(db, "courses"));

    const courses = [];
    coursesSnapshot.forEach((doc) => {
      courses.push({ ...doc.data(), id: doc.id });
    });
    dispatch(createAction(GET_ALL_COURSES, courses));
  } catch (error) {
    console.log(error);
  }
};
