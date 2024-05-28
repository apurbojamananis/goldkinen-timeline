import { TCombinedData, TComment } from "@/Types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimelineCardComment from "./TimelineCardComment";

type TPost = {
  post: TCombinedData;
};

const TimelineCard = ({ post }: TPost) => {
  const randomNumber: number = Math.round(Math.random() * 10);
  return (
    <div className="p-5 my-3 mx-1 border border-gray-300">
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-medium">{post.userInfo.name}</h3>
            <h6 className="text-gray-500 text-sm">{randomNumber} days ago</h6>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-2">
        <h2 className="text-2xl font-semibold capitalize mt-2">{post.title}</h2>
        <p className="mt-2 text-gray-700"> {post.body}</p>
      </div>

      <div className="hidden">
        {post.comments.map((comment: TComment) => (
          <TimelineCardComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
