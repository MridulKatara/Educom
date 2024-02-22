import React from "react";
import Logo from "../assets/logo.png";
import { FaArrowRight, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mx-0 mt-12 bg-[#454655] w-[100%]  pt-12">
      <div className="w-[95%] md:w-[80%] m-auto flex justify-between gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-8 w-[100%] md:w-[40%]">
          <div className="flex gap-2 justify-start items-center pl-2">
            <img src={Logo} alt="logo" className="w-8 h-8" />
            <p className="text-white text-[20px] font-semibold">Educom </p>
          </div>
          <div className="pl-2">
            <h3 className="text-white font-semibold text-[22px]">
              Subscribe to stay updated
            </h3>
          </div>
          <div className="flex items-center justify-between w-[100%] border-[1px] border-white rounded-[5rem] text-white outline-none bg-transparent py-2 pr-2">
            <input
              type="text"
              placeholder="Your Email"
              className="w-[90%] border-none outline-none bg-transparent pl-4 placeholder:text-white "
            />
            <button className="rounded-full bg-white p-2">
              <FaArrowRight color="black" />
            </button>
          </div>
        </div>
        <div className="flex gap-[2rem] md:gap-[8rem] mt-2 md:mt-0 items-start justify-center md:justify-start pl-4 md:pl-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-[14px] font-semibold text-white">Pages</h1>
            <p className="text-neutral-200 font-light text-[14px]">Home</p>
            <p className="text-neutral-200 font-light text-[14px]">About us</p>
            <p className="text-neutral-200 font-light text-[14px]">Course</p>
            <p className="text-neutral-200 font-light text-[14px]">Blog</p>
            <p className="text-neutral-200 font-light text-[14px]">Login</p>
            <p className="text-neutral-200 font-light text-[14px]">Register</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[14px] font-semibold text-white">Service</h1>
            <p className="text-neutral-200 font-light text-[14px]">
              Online Course
            </p>
            <p className="text-neutral-200 font-light text-[14px]">Books</p>
            <p className="text-neutral-200 font-light text-[14px]">Videos</p>
            <p className="text-neutral-200 font-light text-[14px]">Lectures</p>
            <p className="text-neutral-200 font-light text-[14px]">
              Online recording
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[14px] font-semibold text-white">Support</h1>
            <p className="text-neutral-200 font-light text-[14px]">FAQs</p>
            <p className="text-neutral-200 font-light text-[14px]">Contact</p>
            <p className="text-neutral-200 font-light text-[14px]">
              Terms and Condition
            </p>
            <p className="text-neutral-200 font-light text-[14px]">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div
        className=" 
        md:pr-12 flex flex-col items-end justify-start gap-[0.85rem] pb-6"
      >
        <div className="w-[100%] flex items-center gap-4  justify-center md:justify-end md:pr-[5.5rem] mt-8 md:mt-0">
          <div>
            <FaInstagram className="text-white w-6 h-6" />
          </div>
          <div>
            <FaTwitter className="text-white w-6 h-6" />
          </div>
          <div>
            <FaYoutube className="text-white w-6 h-6" />
          </div>
          <div>
            <FaFacebook className="text-white w-6 h-6" />
          </div>
        </div>
        <p className="text-neutral-200 w-[100%] text-center md:text-left flex justify-center md:justify-end">
          © 2023 Educom. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
