import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const PostDetail = () => {
  const { id } = useParams();

  const { post, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.User?.name}</p>
    </div>
  );
};

export default PostDetail;
