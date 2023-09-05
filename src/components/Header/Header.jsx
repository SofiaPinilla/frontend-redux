import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Home </Link>
      {user ? (
        <>
          <Link to="/profile">
            <Avatar
              style={{
                backgroundColor: "blue",
                verticalAlign: "middle",
              }}
              size="small"
            >
              {user.name[0]}
            </Avatar>
          </Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
