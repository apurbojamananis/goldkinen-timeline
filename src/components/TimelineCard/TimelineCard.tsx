import { useState } from "react";
import { TCombinedData, TComment } from "@/Types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimelineCardComment from "../TimelineCardComment/TimelineCardComment";
import MoreIcon from "@/utils/SVGImage/MoreIcon";
import Heart from "@/utils/SVGImage/Heart";
import Share from "@/utils/SVGImage/Share";
import Comments from "@/utils/SVGImage/Comments";
import HeartFilled from "@/utils/SVGImage/HeartFilled";
import { cn } from "@/lib/utils";
import { RandomNumber } from "@/utils/RandomNumber/RandomNumber";

type TPost = {
  post: TCombinedData;
};

const TimelineCard = ({ post }: TPost) => {
  const [isLove, setIsLove] = useState(false);
  const [isShowComment, setIsShowComment] = useState(false);

  const toggleSvg = () => {
    setIsLove(!isLove);
  };
  const toggleComment = () => {
    setIsShowComment(!isShowComment);
  };

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
            <h6 className="text-gray-500 text-sm">{RandomNumber(10)} days ago</h6>
          </div>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      <div className="border-b border-gray-300 py-2">
        <h2 className="text-2xl font-semibold capitalize">{post.title}</h2>
        <p className="mt-2 text-gray-700"> {post.body}</p>
      </div>
      <div className="flex justify-between px-10 border-b border-gray-300 py-2">
        <div className="flex gap-1 items-center hover:text-red-500">
          {isLove ? <HeartFilled onClick={toggleSvg} /> : <Heart onClick={toggleSvg} />}
          <span className=" text-gray-600 cursor-pointer ">
            {isLove ? RandomNumber(1000) + 1 : RandomNumber(1000)}
          </span>
        </div>
        <div className="flex gap-1 items-center hover:text-red-500" onClick={toggleComment}>
          <Comments />
          <span className=" text-gray-600 cursor-pointer hover:text-red-500">
            {post.comments.length} Comments
          </span>
        </div>
        <div className="flex gap-2 items-center hover:text-red-500">
          <Share />
          <span className=" text-gray-600 cursor-pointer hover:text-red-500">Share</span>
        </div>
      </div>

      <div
        className={cn({
          block: isShowComment,
          hidden: !isShowComment,
        })}
      >
        {post.comments.map((comment: TComment) => (
          <TimelineCardComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;