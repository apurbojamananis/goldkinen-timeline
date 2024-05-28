import { selectAllData } from "@/redux/Features/selectors";
import { useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery } from "@/redux/api/timeline.api";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const { isLoading: usersLoading, isError: usersError } = useGetUsersQuery(undefined);
  const { isLoading: postsLoading, isError: postsError } = useGetPostsQuery(undefined);
  const { isLoading: commentsLoading, isError: commentsError } = useGetCommentsQuery(undefined);

  const combinedData = useSelector((state: RootState) => selectAllData(state));

  if (usersLoading || postsLoading || commentsLoading) {
    return <div>Loading...</div>;
  }

  if (usersError || postsError || commentsError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {combinedData.slice(0, 20).map((post) => (
        <TimelineCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
