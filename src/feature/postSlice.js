import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  posts: [],
  bookmarks: [],
  status: STATUSES.IDLE,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(editPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(likePost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(unlikePost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(unlikePost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(commentPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(commentPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(addBookmarkPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addBookmarkPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.bookmarks = action.payload;
      })
      .addCase(removeBookmarkPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(removeBookmarkPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.bookmarks = action.payload;
      })
      .addCase(deleteCommentPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(deleteCommentPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
  },
});

const encodedToken = localStorage.getItem("userToken");

export const getPost = createAsyncThunk(
  "post/get",
  async (noData, thunkAPI) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPost = createAsyncThunk(
  "post/add",
  async (postContent, thunkAPI) => {
    try {
      const res = await axios.post(
        "/api/posts",
        {
          postData: postContent,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/edit",
  async (postContent, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/posts/edit/${postContent[2]}`,
        {
          postData: postContent,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/post/delete",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "/post/like",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unlikePost = createAsyncThunk(
  "/post/unlike",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentPost = createAsyncThunk(
  "/post/comment",
  async ({ postId, commentData }, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData: commentData,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const addBookmarkPost = createAsyncThunk(
  "post/bookmark/add",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.bookmarks;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue;
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "post/bookmark/remove",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.bookmarks;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const deleteCommentPost = createAsyncThunk(
  "post/comment/delete",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      const res = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);



export default postSlice.reducer;
