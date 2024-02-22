import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
import CourseCard from "../components/CourseCard";
import { getProgress, getUserReview } from "../utils/script";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.userReducer);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (currentUser?.courses) {
        try {
          const userCourses = await Promise.all(
            currentUser.courses.map(async (course) => {
              if (course.id) {
                const courseDoc = await getDoc(doc(db, "courses", course.id));
                if (courseDoc.exists()) {
                  const courseData = courseDoc.data();
                  return { ...courseData, id: course.id };
                }
              }
            })
          );
          setCourses(userCourses);
        } catch (error) {
          toast.error("Failed to get courses");
          console.error(error);
        }
      }
    };

    fetchUserCourses();
  }, [currentUser?.courses]);

  return (
    <div className="w-[100%] ">
      <div className="w-[100%] bg-[#2d2f31] py-10">
        <div className="w-[80%] m-auto">
          <h1 className="text-[40px] text-neutral-200 font-semibold">
            My Learnings
          </h1>
        </div>
      </div>
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto py-4">
        {courses?.map((course) => {
          if (course) {
            return (
              <CourseCard
                key={course.id}
                course={course}
                onDashboard
                progress={getProgress(currentUser?.courses, course.id)}
                userReview={getUserReview(currentUser?.courses, course.id)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
