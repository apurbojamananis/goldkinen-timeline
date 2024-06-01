import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MoreIcon from "@/utils/SVGImage/MoreIcon";
import { Globe, Image, Paperclip } from "lucide-react";
import { toast } from "react-toastify";

const TimelinePost = () => {
  return (
    <div className="p-5 mt-1 mb-3 mx-1 border border-gray-300 bg-white rounded">
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://media.licdn.com/dms/image/C5103AQFU98K9lqWYRg/profile-displayphoto-shrink_800_800/0/1573964381934?e=2147483647&v=beta&t=JDF4bkb_0w63_zb6WvlXxwsTiE06DUkikYVpbzNxMwY"
              className="size-10"
            />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-medium">Anishur Rahman</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1 ">
              <span>Public</span>
              <Globe className="size-4" />
            </p>
          </div>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      <div className="py-5 pl-10">
        <form action="#">
          <input
            type="text"
            className="text-3xl font-semibold capitalize w-full focus:outline-none"
            placeholder="Post title here"
          />
          <textarea
            className="mt-5 text-lg text-gray-700  w-full focus:outline-none"
            placeholder="Post content here"
            rows={10}
          ></textarea>
        </form>
      </div>
      <div className="flex justify-between items-center border p-2 rounded">
        <div className="flex gap-5 items-center">
          <Image className="cursor-pointer" />
          <Paperclip className="cursor-pointer" />
        </div>
        <Button
          type="submit"
          className="px-10 py-2 text-lg"
          onClick={() => {
            toast.success("We are working on this!");
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default TimelinePost;
