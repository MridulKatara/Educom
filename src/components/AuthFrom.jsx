import React, { useState } from "react";
import { primaryColor } from "../constants";
import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

const AuthFrom = ({ onSignUp, handleSubmit }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormFieldChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center gap-8">
      <h1 className="text-center text-bold text-[44px]">
        {onSignUp ? "Create An Account" : "Login To Educom"}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
        className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[25%] gap-4 "
      >
        {onSignUp && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-[100%] h-[3rem] p-2 rounded-md border-[1px] border-neutral-400"
            name="displayName"
            onChange={handleFormFieldChange}
          />
        )}
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-[100%] h-[3rem] p-2 rounded-md border-[1px] border-neutral-400"
          name="email"
          onChange={handleFormFieldChange}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[100%] h-[3rem] p-2 rounded-md border-[1px] border-neutral-400"
          name="password"
          autoComplete
          onChange={handleFormFieldChange}
        />
        {onSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-[100%] h-[3rem] p-2 rounded-md border-[1px] border-neutral-400"
            name="confirmPassword"
            onChange={handleFormFieldChange}
          />
        )}

        <button
          type="submit"
          className={`py-2 bg-[${primaryColor}] text-white font-semibold w-[100%] rounded-md`}
        >
          Submit
        </button>
        {!onSignUp && (
          <button
            type="submit"
            className={`py-2 bg-red-500 text-white font-semibold w-[100%] rounded-md flex items-center justify-center gap-2`}
          >
            <FaGooglePlusG className="w-6 h-6 pt-[1.5px]" /> Sign In With Google
          </button>
        )}
      </form>
      <Link
        to={onSignUp ? "/login" : "/register"}
        className={`text-sky-600 text-md`}
      >
        {onSignUp
          ? " Already Registered? Log In"
          : "Don't have an account? Register Here"}
      </Link>
    </div>
  );
};

export default AuthFrom;
