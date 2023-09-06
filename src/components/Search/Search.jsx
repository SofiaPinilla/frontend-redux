import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByName } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import Post from "../Post/Post";

const Search = () => {
  const { title } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByName(title));
  }, [title]);
  return <div><Post/></div>;
};

export default Search;
