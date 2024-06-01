import { useState } from "react";
import { selectAllData } from "@/redux/Features/selectors";
import { useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery } from "@/redux/api/timeline.api";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TimelineCard from "../TimelineCard/TimelineCard";
import PostSkeleton from "../../Skeleton/PostSkeleton";
import { TCombinedData } from "@/Types/types";

const Timeline = () => {
  const [showAllPost, setShowAllPost] = useState(false);
  const { isLoading: usersLoading, isError: usersError } = useGetUsersQuery(undefined);
  const { isLoading: postsLoading, isError: postsError } = useGetPostsQuery(undefined);
  const { isLoading: commentsLoading, isError: commentsError } = useGetCommentsQuery(undefined);

  const combinedData = useSelector((state: RootState) => selectAllData(state));

  if (usersLoading || postsLoading || commentsLoading) {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  }

  if (usersError || postsError || commentsError) {
    return (
      <div className=" flex justify-center items-center min-h-screen">
        Something went wrong! Please try again!
      </div>
    );
  }

  return (
    <div>
      {combinedData.slice(0, showAllPost ? combinedData.length : 20).map((post: TCombinedData) => (
        <TimelineCard key={post.id} post={post} />
      ))}

      {!showAllPost && combinedData.length > 20 && (
        <div
          className="flex justify-center pb-8 hover:underline"
          onClick={() => setShowAllPost(true)}
        >
          <p className="text-lg text-gray-700 font-medium cursor-pointer">Show all Post</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
