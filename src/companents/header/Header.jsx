import React, { useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import rasm  from "../../assets/Header.svg"
const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="  header container mx-auto px-5">
        <div className=" flex items-center  gap-[69px] justify-between mt-5">
          <Link to={"/"}>
<img src={rasm} alt="" />      
    </Link>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
        
              <div className="flex items-center gap-1 navbar__collection">
              <FaUserCircle  className="text-[24px] " />
                <NavLink className={"text-xl hover:text-gray-400 transition-all  "} 
                to={"Admin"}>
                 <p> user</p>
                </NavLink >
              </div>
              <button onClick={() => dispatch({ type: "LOGOUT" })} className="border-none outline-none text-xl font-bold">
                Logout
              </button>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
