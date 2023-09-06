import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");

  const navigate = useNavigate()
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      console.log(text);
      navigate("/search/"+text)
    }
  };

  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Home </Link>
      <input onKeyUp={handleChange} placeholder="search post" name="text" />

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
