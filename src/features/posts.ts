import { posts, Posts } from "@/data/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  posts: {
    data: Posts[];
    total: number;
  };
  post: Posts;
}

const initialState: PostsState = {
  posts: {
    data: posts,
    total: posts.length
  },
  post: posts[0]
};

const postsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setPostById(state: PostsState, action: PayloadAction<Posts>) {
      state.post = action.payload;
    }
  }
});

export const { setPostById } = postsSlice.actions;
export default postsSlice.reducer;
