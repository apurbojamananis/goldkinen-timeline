import {
  BadgeHelp,
  BellRing,
  BookMarkedIcon,
  Building2,
  Contact2,
  GroupIcon,
  HomeIcon,
  ListIcon,
  User,
  VideoIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen py-5 px-5">
      <div>
        <div className=" pb-5 px-5 border-b border-gray-300">
          <h2 className="text-xl font-bold uppercase px-2 py-1 bg-black text-white rounded inline-block">
            GKT
          </h2>
        </div>

        <ul className="flex flex-col gap-3 py-5 border-b border-gray-300 ">
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            {" "}
            <HomeIcon />
            <span>Home</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            {" "}
            <BellRing />
            <span>Notification</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <BookMarkedIcon />
            <span>Bookmarks</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <GroupIcon />
            <span>Communities</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <ListIcon />
            <span>Reading List</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <VideoIcon />
            <span>Videos</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <Building2 />
            <span>About</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <Contact2 />
            <span>Contact</span>
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <BadgeHelp />
            Guides
          </li>
          <li className="font-semibold hover:bg-gray-500 hover:text-white px-5 py-3 rounded transition-all flex gap-3 items-center">
            <User />
            Profile
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src="https://media.licdn.com/dms/image/C5103AQFU98K9lqWYRg/profile-displayphoto-shrink_800_800/0/1573964381934?e=2147483647&v=beta&t=JDF4bkb_0w63_zb6WvlXxwsTiE06DUkikYVpbzNxMwY"
            className="size-10"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-base font-medium">Anishur Rahman</h3>
          <h6 className="text-gray-500 text-sm">apurbojaman.anis@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
