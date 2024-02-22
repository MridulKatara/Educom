import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/user/user.actions";
import { useEffect, useRef, useState } from "react";
import { debounce } from "../utils/script";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const path = useLocation().pathname;
  const { allCourses } = useSelector((state) => state.coursesReducer);
  const [inputString, setInputString] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { auth, currentUser } = useSelector((state) => state.userReducer);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  const setSidebar = () => {
    if (sidebarRef.current.style.left === "0px") {
      setSidebarOpen(false);
      sidebarRef.current.style.left = "-100%";
    } else {
      sidebarRef.current.style.left = "0px";
      setSidebarOpen(true);
    }
  };

  const links = [
    {
      id: 1,
      title: "Courses",
      href: "/courses",
    },
    {
      id: 2,
      title: "About us",
    },
    {
      id: 3,
      title: "Contact",
    },
  ];

  useEffect(() => {
    if (sidebarRef.current && sidebarRef.current.style) {
      sidebarRef.current.style.left = "-100%";
    }

    const filterCourses = () => {
      const filteredCoursesData = allCourses.filter((course) => {
        return course.name.toLowerCase().includes(inputString);
      });
      setFilteredCourses(filteredCoursesData);
    };
    const debounceFunc = debounce(filterCourses, 2000);
    debounceFunc(allCourses);
  }, [inputString, allCourses]);

  return (
    <div className="flex justify-between items-center w-[90%] md:w-[80%] m-auto py-6">
      <div className="flex items-center gap-4 w-[90%] md:w-[50%]">
        <div>
          <Link to="/">
            <div className=" flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-12 w-12" />
              <span className="font-bold text-neutral-800 hidden md:block ">
                Educom
              </span>
            </div>
          </Link>
        </div>

        <div className="w-[100%] md:w-[70%] relative">
          <input
            onChange={(e) => {
              setInputString(e.target.value);
            }}
            value={inputString}
            type="text"
            placeholder="Search For Courses"
            className="w-[100%] h-[2.5rem] p-2 rounded-md border-[1px] border-neutral-400 outline-none"
          />
          {filteredCourses.length > 0 && inputString && (
            <div className="absolute top-[2.5rem] w-[100%] bg-white overflow-y-scroll h-[60vh] flex flex-col gap-4">
              {filteredCourses.map((course) => {
                return (
                  <Link
                    to={`/courses/${course.id}`}
                    onClick={() => {
                      setInputString("");
                    }}
                  >
                    <div className="flex  items-center gap-4 py-2 px-4">
                      <div className="w-[12rem] h-[6rem]">
                        <img
                          src={course.thumbnail}
                          alt=""
                          className="min-w-[12rem] min-h-[6rem] object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] text-neutral-900">
                          {course.name}
                        </h1>
                      </div>
                    </div>
                  </Link>
                );
              })}{" "}
            </div>
          )}
        </div>
      </div>
      {path !== "/login" && path !== "/register" && (
        <ul
          ref={sidebarRef}
          className="z-[1] md:z-0 transition-all flex flex-col md:flex-row px-24 md:px-0 justify-center md:justify-start items-center gap-4 font-semibold cursor-pointer fixed md:static h-[100vh] md:h-[auto] bg-white md:bg-transparent top-0 left-[-100%] "
        >
          {links.map((item) => (
            <Link to={item.href} onClick={setSidebar}>
              {item.title}
            </Link>
          ))}
          {!auth && (
            <Link to="/register" onClick={setSidebar}>
              <button className="p-2 text-neutral-800 text-center border-[1px] border-[#3981ed] rounded-md">
                Register
              </button>
            </Link>
          )}

          {!auth && (
            <Link to="/login" onClick={setSidebar}>
              {" "}
              <button className="px-3 py-2 text-white text-center bg-[#3981ed] rounded-md  ">
                Login``
              </button>
            </Link>
          )}
          {auth && (
            <Link onClick={setSidebar} to={`/dashboard/${currentUser.id}`}>
              {currentUser.displayName}
            </Link>
          )}
          {auth && (
            <button
              onClick={async () => {
                await dispatch(signOut());
                setSidebar();
              }}
              className="px-3 py-2 text-white text-center bg-[#3981ed] rounded-md  "
            >
              Logout
            </button>
          )}
        </ul>
      )}
      <div
        className="block md:hidden transition duration-400 ease"
        onClick={() => {
          setSidebar();
        }}
      >
        {sidebarOpen ? (
          <RxCross2 className="w-6 h-6" />
        ) : (
          <GiHamburgerMenu className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
