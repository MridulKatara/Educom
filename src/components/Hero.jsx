import React from "react";
import HeroImg from "../assets/hero.png";
import HeroCoursesImg from "../assets/hero-courses.png";
import { primaryColor } from "../constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = ({ onCourses }) => {
  const { auth, currentUser } = useSelector((state) => state.userReducer);
  return (
    <div
      className={` flex ${
        onCourses && "md:flex-row-reverse"
      } flex-col md:flex-row items-center md:justify-between w-[90%] md:w-[80%] m-auto h-[min-content] md:h-[90vh]`}
    >
      <div
        className={`${
          onCourses ? "md:pl-12" : "md:pr-12"
        } md:py-24 flex-[1.60] h-[100%] flex flex-col-reverse md:flex-col gap-6 ${
          onCourses && "justify-end"
        }`}
      >
        <h1 className="text-neutral-800 font-bold text-[60px] leading-normal hidden md:block">
          {onCourses
            ? "Explore Courses From The Most Renonwed Experts "
            : "Take Your Learning to The Next Level."}
        </h1>
        <p className="text-neutral-400 text-[20px] leading-10 md:pr-8 maxSm:text-center ">
          Boost Your Skills With Our Specialized Courses Designed To Make You An
          Expert.
        </p>
        <div>
          {" "}
          {!auth && (
            <Link to="/login">
              <button
                className={`bg-[${primaryColor}] py-[0.7rem] px-8 text-white font-semibold text-center rounded-md block maxSm:m-auto`}
              >
                Get Started
              </button>
            </Link>
          )}
          {auth && (
            <Link to={`/dashboard/${currentUser.id}`}>
              <button
                className={`bg-[${primaryColor}] py-[0.7rem] px-8 text-white font-semibold text-center rounded-md block maxSm:m-auto`}
              >
                Got To Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        className={`flex-[1.40] ${
          onCourses ? `bg-white` : `bg-[${primaryColor}]`
        } rounded-t-lg px-2`}
      >
        <img
          src={onCourses ? HeroCoursesImg : HeroImg}
          alt="hero"
          className="mt-4 h-[100%] w-[100%] hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
