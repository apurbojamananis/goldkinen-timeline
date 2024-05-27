import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const timelineApi = createApi({
  reducerPath: "timelineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery } = timelineApi;
