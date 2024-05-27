import { TComment } from "@/Types/types";
import { selectAllData } from "@/redux/Features/selectors";
import { useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery } from "@/redux/api/timeline.api";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

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

  console.log(combinedData);

  return (
    <div>
      {combinedData.slice(0, 5).map((post) => (
        <div key={post.id}>
          <p>By {post.userInfo.username}</p>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
          <h4>Comments: </h4>
          {post.comments.map((comment: TComment) => (
            <div key={comment.id}>
              <p>
                <strong>Comment Name: {comment.name}</strong>
              </p>
              <p>
                <strong>Comment Body: {comment.body}</strong>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
