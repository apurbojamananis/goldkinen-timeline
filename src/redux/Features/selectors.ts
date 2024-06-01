import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TComment, TPost, TUser } from "./../../Types/types";

export const selectUsersData: any = (state: RootState) =>
  state.timelineApi.queries["getUsers(undefined)"]?.data || [];
export const selectPostsData: any = (state: RootState) =>
  state.timelineApi.queries["getPosts(undefined)"]?.data || [];
export const selectCommentsData: any = (state: RootState) =>
  state.timelineApi.queries["getComments(undefined)"]?.data || [];

export const selectAllData = createSelector(
  [selectUsersData, selectPostsData, selectCommentsData],
  (
    users: TUser[] | undefined,
    posts: TPost[] | undefined,
    comments: TComment[] | undefined
  ): any => {
    return posts!
      .map((post: TPost) => {
        const user = users!.find((user: TUser) => user.id === post.userId);
        const postComments = comments!.filter((comment: TComment) => comment.postId === post.id);

        return {
          ...post,
          userInfo: user,
          comments: postComments,
        };
      })
      .sort((a, b) => b.id - a.id);
  }
);
