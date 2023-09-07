import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await postsService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const getByName = createAsyncThunk("posts/getByName", async (title) => {
  try {
    return await postsService.getByName(title);
  } catch (error) {
    console.error(error);
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    return await postsService.deletePost(id);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
        state.isLoading = false;
      })
      .addCase(getById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled,(state,action)=>{
        state.posts = state.posts.filter(post => post.id != action.payload)
      })
  },
});

export default postsSlice.reducer;
