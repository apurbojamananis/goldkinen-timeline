import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TCombinedData, TComment, TPost, TUser } from "./../../Types/types";

export const selectUsersData = (state: RootState) =>
  state.timelineApi.queries["getUsers(undefined)"]?.data || [];
export const selectPostsData = (state: RootState) =>
  state.timelineApi.queries["getPosts(undefined)"]?.data || [];
export const selectCommentsData = (state: RootState) =>
  state.timelineApi.queries["getComments(undefined)"]?.data || [];

export const selectAllData = createSelector(
  [selectUsersData, selectPostsData, selectCommentsData],
  (users: TUser[], posts: TPost[], comments: TComment[]): TCombinedData[] => {
    return posts
      .map((post: TPost) => {
        const user = users.find((user: TUser) => user.id === post.userId);
        const postComments = comments.filter((comment: TComment) => comment.postId === post.id);

        return {
          ...post,
          userInfo: user,
          comments: postComments,
        };
      })
      .sort((a, b) => b.id - a.id);
  }
);
