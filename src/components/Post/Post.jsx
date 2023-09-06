import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  
  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Post;
