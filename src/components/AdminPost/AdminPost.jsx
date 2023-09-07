import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { deletePost, getAll } from "../../features/posts/postsSlice";
const AdminPost = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <br />
            <span>{post.title}</span>
            <span
              onClick={async() => {
              dispatch(deletePost(post.id));
              }}
            >
              <DeleteOutlined />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPost;
