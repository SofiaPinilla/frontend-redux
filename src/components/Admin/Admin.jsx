import React, { useEffect } from "react";
import AdminPost from "../AdminPost/AdminPost";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/posts/postsSlice";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div>
      Admin
      <AdminPost />
    </div>
  );
};

export default Admin;
