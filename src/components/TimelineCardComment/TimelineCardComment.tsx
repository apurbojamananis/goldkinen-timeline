import { TComment } from "@/Types/types";
import { RandomNumber } from "@/utils/RandomNumber/RandomNumber";
import Comments from "@/utils/SVGImage/Comments";
import Heart from "@/utils/SVGImage/Heart";

type TComments = {
  comment: TComment;
};

const TimelineCardComment = ({ comment }: TComments) => {
  return (
    <div className="py-1">
      <div className="flex gap-2 items-top py-2 ">
        <img
          src={`https://randomuser.me/api/portraits/men/${RandomNumber(100)}.jpg`}
          className="size-8 rounded-full"
        />
        <div className="bg-gray-100 px-3 pt-1 pb-3 rounded">
          <h5 className="text-base text-gray-800 font-semibold capitalize">{comment.name}</h5>
          <p className="mt-2 pr-5 text-sm">{comment.body}</p>
        </div>
      </div>
      <div className="flex gap-8 px-12">
        <div className="flex gap-1 items-center ">
          <Heart className="size-4" />
          <span className=" text-gray-600 cursor-pointer text-xs">{RandomNumber(1000)}k</span>
        </div>
        <div className="flex gap-1 items-center ">
          <Comments className="size-4" />
          <span className=" text-gray-600 cursor-pointer text-xs">{RandomNumber(500)}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCardComment;
