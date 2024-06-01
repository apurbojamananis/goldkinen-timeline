import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import MyTags from "./MyTags/MyTags";
import RecommendedTopics from "./RecommendedTopics/RecommendedTopics";

const RightSidebar = () => {
  return (
    <div className="p-5">
      <div className="pb-5 ">
        <Link to="/post">
          <Button className="w-full">Publish Your Thoughts</Button>
        </Link>
      </div>
      <RecommendedTopics />
      <MyTags />
    </div>
  );
};

export default RightSidebar;
