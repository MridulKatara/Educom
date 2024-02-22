import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { coursesReducer } from "./courses/courses.reducer";

export const rootReducer = combineReducers({
  userReducer,
  coursesReducer,
});
