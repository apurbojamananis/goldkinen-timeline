import { useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery } from "@/redux/api/timeline.api";

const Timeline = () => {
  const { data: users } = useGetUsersQuery(undefined);
  const { data: post } = useGetPostsQuery(undefined);
  const { data: comments } = useGetCommentsQuery(undefined);
  console.log({ users, post, comments });
  return (
    <div>
      <h1>This is Timeline component</h1>
    </div>
  );
};

export default Timeline;
