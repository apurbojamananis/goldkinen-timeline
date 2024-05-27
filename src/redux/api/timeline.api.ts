import { TComment, TPost, TUser } from "@/Types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const timelineApiSlice = createApi({
  reducerPath: "timelineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getPosts: builder.query<TPost[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getComments: builder.query<TComment[], void>({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery } = timelineApiSlice;
