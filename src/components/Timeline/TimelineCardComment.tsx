import { TComment } from "@/Types/types";

type TComments = {
  comment: TComment;
};

const TimelineCardComment = ({ comment }: TComments) => {
  return (
    <div key={comment.id}>
      <p>Comment Name: {comment.name}</p>
      <p>Comment Body: {comment.body}</p>
    </div>
  );
};

export default TimelineCardComment;
