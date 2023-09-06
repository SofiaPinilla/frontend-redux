import React, { useEffect } from "react";
import Post from "../Post/Post";
import { getAll } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
