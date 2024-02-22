import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../store/courses/courses.actions";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const { allCourses } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);
  return (
    <>
      <Hero onCourses={true} />
      <div className="flex flex-col w-[80%] gap-12 py-12 m-auto">
        <h1 className="text-[48px] text-neutral-800 text-center font-bold">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12">
          {allCourses?.map((course) => {
            return <CourseCard course={course} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
