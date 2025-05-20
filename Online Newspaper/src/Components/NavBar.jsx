import { Link, NavLink } from "react-router";
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import userImg from "../assets/User.png";
const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 pt-2 pb-2">
        {user && (
          <div className="flex gap-2 items-center">
            <img src={userImg} alt="" className="h-12 w-12" />
            <p>{user}</p>
          </div>
        )}
        {!user && <p>Login</p>}
        {/* <img src={userImg} alt="" className="h-12 w-12" /> */}
        <Link to={"/auth/login"} className="btn btn-primary px-10 ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
